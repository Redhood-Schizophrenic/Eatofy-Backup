import db from '../../../../lib/db';
import { UserResponse } from '@/types/UserResponse';

export async function delete_user(data: any): Promise<UserResponse> {
	try {

		const user_id: string | null = data['user_id'];

		// Default Invalid Checker
		if (user_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}


		// If user doesn't exists
		const existingUser = await db.user.findMany({
			where: {
				id: { equals: user_id }
			}
		});

		if (existingUser.length == 0) {
			return {
				returncode: 307,
				message: "User doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the User
		await db.user.delete({
			where: {
				id: user_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "User Deleted",
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

