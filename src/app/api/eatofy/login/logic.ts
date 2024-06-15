import db from '../../../../lib/db.ts';
import UserResponse from '../../../types/UserResponse.ts';

export async function register_user(data: any): Promise<ApiResponse> {
	try {

		const username: String | null = data['username'];
		const email: String | null = data['email'];
		const password: String | null = data['password'];

		const existingUsername = await db.user.findMany({
			where: {
				Username: username
			}
		})
		//({ Username: username });

		//if (existingUsername.length==0) {
		//	return {
		//		returncode: 307,
		//		message: 'User Exists, please login',
		//		output: [existingUsername]
		//	}
		//}

		const existingEmail = await db.user.findMany({
			where: {
				Email: email
			}
		});

		//if (existingEmail.length==0) {
		//	return {
		//		returncode: 307,
		//		message: 'User Exists, please login',
		//		output: [existingEmail]
		//	}
		//}
		
		const result = await db.user.create({
				data: {
					Username: username,
					Email: email,
					Password: password
				},
		});

		return {
			returncode: 200,
			message: "User Registered",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

