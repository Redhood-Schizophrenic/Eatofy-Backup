import db from '../../../../lib/db';
import { HotelResponse } from '@/types/HotelResponse';

export async function delete_hotel(data: any): Promise<HotelResponse> {
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
		const existingHotel = await db.hotels.findMany({
			where: {
				id: { equals: hotel_id }
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the User
		await db.hotels.delete({
			where: {
				id: hotel_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel Deleted",
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

