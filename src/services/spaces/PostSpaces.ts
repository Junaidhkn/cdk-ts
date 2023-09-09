import {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from 'aws-lambda';

export async function postSpaces(
	event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: `I am working from ${process.env.TABLE_NAME}`,
		}),
	};

	return response;
}
