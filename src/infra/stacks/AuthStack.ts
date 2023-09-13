import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AuthStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		this.createUserPool();
		this.createUserPoolClient();
	}

	private createUserPool() {}

	private createUserPoolClient() {}
}
