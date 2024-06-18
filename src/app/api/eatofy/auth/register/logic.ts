import db from '@/lib/db';
import { UserResponse } from '@/types/UserResponse';
import { register } from '@/schemas/Authentication/register';
import { ZodError } from 'zod';
import User from '@/model/User';

export async function register_user(data: any): Promise<UserResponse> {
	try {

		const username: string | null = data['username'];
		const email: string | null = data['email'];
		const password: string | null = data['password'];
		
		// Default Invalid Checker
		if (username == null || email == null || password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var UserSchema = register.parse(data);
			UserSchema
		} catch (error: ZodError | any) {
			try {
				const err = JSON.parse(error.message);
				let error_message: any = '';
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

		// Existing User
		const existingUsername = await db.user.findMany({
			where: {
				Username: { equals: username }
			}
		});

		if (existingUsername.length != 0) {
			return {
				returncode: 307,
				message: 'Username Exists, please login',
				output: []
			}
		}

		const existingEmail = await db.user.findMany({
			where: {
				Email: { equals: email }
			}
		});

		if (existingEmail.length != 0) {
			return {
				returncode: 307,
				message: 'User Email Exists, please login',
				output: []
			}
		}

		// Inserting the User
		const result: User = await db.user.create({
			data: {
				Username: username,
				Email: email,
				Password: password
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "User Registered",
			output: result
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

