import {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from 'aws-lambda';

async function handler(event: APIGatewayProxyEvent, context: Context) {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: `I am working from ${process.env.TABLE_NAME}`,
		}),
	};

	return response;
}

export { handler };
