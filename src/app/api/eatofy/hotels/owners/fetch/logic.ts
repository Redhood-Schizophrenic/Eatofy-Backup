import db from '@/lib/db';
import { HotelOwnersResponse } from '@/types/HotelOwnersResponse';

export async function fetch_hotel_owner(data: any): Promise<HotelOwnersResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if (hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Hotel doesn't exists
		const existingHotelOwner = await db.hotel_Owners.findMany({
			where: {
				HotelId: { equals: hotel_id }
			}
		});

		if (existingHotelOwner.length == 0) {
			return {
				returncode: 307,
				message: "Owner doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Subscription Fetched",
			output: existingHotelOwner
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
