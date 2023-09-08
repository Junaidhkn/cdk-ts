import { App } from 'aws-cdk-lib';
import { DataStack } from './stacks/DataStack';
import { LambdaStack } from './stacks/LmbdaStack';

const app = new App();

new DataStack(app, 'DataStack');
new LambdaStack(app, 'LambdaStack');
