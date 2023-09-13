import { JsonError } from './Validator';

export const parseJSON = (arg: string) => {
	try {
		return JSON.parse(arg);
	} catch (error) {
		throw new JsonError(`Error parsing JSON: ${error.message}`);
	}
};
