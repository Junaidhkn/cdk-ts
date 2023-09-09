import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from 'aws-lambda';
import { postSpaces } from './PostSpaces';

const DynamodbClient = new DynamoDBClient({});

async function handler(
	event: APIGatewayProxyEvent,
	context: Context,
): Promise<APIGatewayProxyResult> {
	let message: string;

	switch (event.httpMethod) {
		case 'GET':
			message = 'GET';
			break;
		case 'POST':
			const response = await postSpaces(event, DynamodbClient);
			return response;
		default:
			break;
	}

	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify(message),
	};

	return response;
}

export { handler };
