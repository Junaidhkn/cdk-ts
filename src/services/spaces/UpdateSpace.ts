import {
	DynamoDBClient,
	GetItemCommand,
	PutItemCommand,
	ScanCommand,
	UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function updateSpace(
	event: APIGatewayProxyEvent,
	ddbClient: DynamoDBClient,
): Promise<APIGatewayProxyResult> {
	if (
		event.queryStringParameters &&
		'id' in event.queryStringParameters &&
		event.body
	) {
		const parsedBody = JSON.parse(event.body);
		const spaceId = event.queryStringParameters['id'];
		const requestBodyKey = Object.keys(parsedBody)[0];
		const requestBodyValue = parsedBody[requestBodyKey];

		const updateResult = await ddbClient.send(
			new UpdateItemCommand({
				TableName: process.env.TABLE_NAME,
				Key: {
					id: { S: spaceId },
				},
				UpdateExpression: 'set #name = :new',
				ExpressionAttributeValues: {
					':new': { S: requestBodyValue },
				},
				ExpressionAttributeNames: {
					'#name': requestBodyKey,
				},
				ReturnValues: 'UPDATED_NEW',
			}),
		);

		return {
			statusCode: 200,
			body: JSON.stringify(updateResult),
		};
	} else {
		return {
			statusCode: 404,
			body: JSON.stringify('Updated operation failed'),
		};
	}
}
