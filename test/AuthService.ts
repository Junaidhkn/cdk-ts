import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

export class AuthService {
	public async login(userName: string, password: string) {
		const result = (await Auth.signIn(userName, password)) as CognitoUser;
		return result;
	}
}
