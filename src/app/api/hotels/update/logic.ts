import db from '../../../../lib/db';
import { UserResponse } from '@/types/UserResponse';
import { forgot_password } from '@/schemas/Authentication/forgot_password';
import { ZodError } from 'zod';

export async function update_password(data: any): Promise<UserResponse> {
	try {

		const email: string | null = data['email'];
		const old_password: string | null = data['old_password'];
		const new_password: string | null = data['new_password'];

		// Default Invalid Checker
		if (old_password == null || email == null || new_password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var UserSchema = forgot_password.parse(data);
			UserSchema;
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

		// Check whether user exists
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

		// Updating the User's Password
		try {
			let result: UserResponse | undefined;

			for (const user of existingEmail) {
				if (user.Password === old_password) {
					const user_updated: any = await db.user.update({
						where: {
							Email: email,
						},
						data: {
							Password: new_password,
						},
					});

					result = {
						returncode: 200,
						message: "User Password Updated",
						output: user_updated,
					};

					break; // Exit the loop once password is updated
				}
			}

			if (!result) {
				return {
					returncode: 400,
					message: "User not found or old password incorrect",
					output: [],
				};
			}

			return result;

		} catch (error: any) {
			return {
				returncode: 500,
				message: error.message,
				output: [],
			};
		}


	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

