import {
	DynamoDBClient,
	GetItemCommand,
	PutItemCommand,
	ScanCommand,
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
		const spaceId = event.queryStringParameters['id'];
		const item = JSON.parse(event.body);

		const getItemResponse = await ddbClient.send(
			new GetItemCommand({
				TableName: process.env.TABLE_NAME,
				Key: {
					id: { S: spaceId },
				},
			}),
		);
		if (getItemResponse.Item) {
			const result = await ddbClient.send(
				new PutItemCommand({
					TableName: process.env.TABLE_NAME,
					Item: {
						id: {
							S: spaceId,
						},
						location: {
							S: item.location,
						},
					},
				}),
			);
			console.log(result);
			return {
				statusCode: 200,
				body: JSON.stringify(getItemResponse.Item),
			};
		} else {
			return {
				statusCode: 404,
				body: JSON.stringify(`Space with Id: ${spaceId}not found`),
			};
		}
	}
}
