import db from '@/lib/db';
import { HotelOwnersResponse } from '@/types/HotelOwnersResponse';

export async function delete_hotel_owner(data: any): Promise<HotelOwnersResponse> {
	try {

		const owner_id: string | null = data['owner_id'];

		// Default Invalid Checker
		if (owner_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Owner doesn't exists
		const existingOwner = await db.hotel_Owners.findMany({
			where: {
				id: { equals: owner_id }
			}
		});

		if (existingOwner.length == 0) {
			return {
				returncode: 307,
				message: "Owner doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Owner
		await db.hotel_Owners.delete({
			where: {
				id: owner_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Owner Deleted",
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

