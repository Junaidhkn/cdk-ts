import { AuthService } from './AuthService';

async function testAuth() {
	const authService = new AuthService();
	const result = await authService.login('junaid', 'amahhKHAN7786)');
	console.log(result);
}
// testAuth();
