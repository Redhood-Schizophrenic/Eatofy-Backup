import db from '@/lib/db';
import { TablesResponse } from '@/types/TablesResponse';

export async function fetch_tables(data: any): Promise<TablesResponse> {
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
		const existingHotel = await db.tables.findMany({
			where: {
				HotelId: { equals: hotel_id }
			},
			include: {
				Category: true
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Tables Fetched",
			output: existingHotel
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
