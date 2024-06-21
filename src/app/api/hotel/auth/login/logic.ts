import db from '@/lib/db';
import { login } from '@/schemas/Authentication/login';
import { ZodError } from 'zod';
import { create_session } from '@/lib/utils/session';
import bcrypt from 'bcrypt';

export async function login_hotel(data: any): Promise<any> {
	try {
		const email: string | null = data['email'];
		const password: string | null = data['password'];

		// Default Invalid Checker
		if (email == null || password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			};
		}

		// Zod Input Checker
		try {
			login.parse(data);
		} catch (error: any) {
			if (error instanceof ZodError) {
				const error_message = error.errors.map(err => err.message).join(', ');
				return {
					returncode: 400,
					message: error_message,
					output: []
				};
			} else {
				return {
					returncode: 400,
					message: error.message,
					output: []
				};
			}
		}

		// If User doesn't exist
		const existingEmail = await db.hotels.findMany({
			where: { Email: { equals: email } }
		});

		if (existingEmail.length == 0) {
			return {
				returncode: 307,
				message: "User Email doesn't exist, please register",
				output: []
			};
		}

		let result;
		let hotel_data;

		for (const user of existingEmail) {
			const match = await bcrypt.compare(password, user.HashedPassword);
			if (match) {
				result = create_session(user);
				hotel_data = user;
				break; // If a match is found, break out of the loop
			}
		}

		await db.$disconnect();

		return {
			returncode: 200,
			message: "Session Created",
			token: result,
			// output: hotel_data
		};


	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

