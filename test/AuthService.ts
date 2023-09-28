import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'ap-south-1';

Amplify.configure({
	Auth: {
		region: awsRegion,
		userPoolId: 'ap-south-1_DZ1I3LUBG',
		userPoolWebClientId: '78778mm5kstcpc8a9krklv2dm8',
		authenticationFlowType: 'USER_PASSWORD_AUTH',
	},
});

export class AuthService {
	public async login(userName: string, password: string) {
		const result = (await Auth.signIn(userName, password)) as CognitoUser;
		return result;
	}
}
