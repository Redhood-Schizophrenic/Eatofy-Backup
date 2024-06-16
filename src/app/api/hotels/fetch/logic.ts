import db from '../../../../lib/db';
import { UserResponse } from '@/types/UserResponse';
import { login } from '@/schemas/Authentication/login';
import { ZodError } from 'zod';

export async function login_user(data: any): Promise<UserResponse> {
	try {

		const email: string | null = data['email'];
		const password: string | null = data['password'];

		// Default Invalid Checker
		if (email == null || password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var UserSchema = login.parse(data);
			UserSchema
		} catch (error: ZodError | any) {
			try {
				const err = JSON.parse(error.message);
				let error_message = '';
				await (err as any).forEach((obj: any) => {
					error_message = obj.message;
				});

				return {
					returncode: 400,
					message: error_message,
					output: []
				};


			} catch (error: any) {
				return {
					returncode: 400,
					message: error.message,
					output: []
				};

			}
		}

		// If User doesn't exists
		const existingEmail = await db.user.findMany({
			where: {
				Email: { equals: email }
			}
		});

		if (existingEmail.length == 0) {
			return {
				returncode: 307,
				message: "User Email doesn't Exists, please register",
				output: []
			}
		}

		//Update Password
		let result;
		existingEmail.forEach((user: any) => {
			if (user.Password == password) {

				result = {
					returncode: 200,
					message: "User Logged In",
					output: existingEmail
				};

				return;
			}
		});
		
		if(result!=undefined)
		{
			return result;
		}

		return {
			returncode: 400,
			message: "Password Doesn't Match",
			output: []
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

