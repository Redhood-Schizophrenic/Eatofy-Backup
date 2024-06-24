import db from '@/lib/db';
import { hashing } from '@/lib/utils/hashing';
import { HotelOwnersResponse } from '@/types/HotelOwnersResponse';

export async function update_hotel_owner(data: any): Promise<HotelOwnersResponse> {
	try {

		const owner_id: string | null = data['owner_id'];
		const password: string | null = data['password'];
	
		// Default Invalid Checker
		if (owner_id == null || password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Check whether Owner exists
		const existingHotelOwners = await db.hotel_Owners.findMany({
			where: {
				id: { equals: owner_id }
			}
		});

		if (existingHotelOwners.length == 0) {
			return {
				returncode: 307,
				message: "Hotel's Owner doesn't Exists.",
				output: []
			}
		}

		const HashedPassword = await hashing(password);

		const hotel_owner_updated: any = await db.hotel_Owners.update({
			where: {
				id: owner_id
			},
			data: {
				HashedPassword: HashedPassword
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Owner's Password Updated",
			output: hotel_owner_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

