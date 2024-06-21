import db from '@/lib/db';
import { TableCategoryResponse } from '@/types/TablesResponse';

export async function fetch_table_category(data: any): Promise<TableCategoryResponse> {
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

		// If Categories doesn't exists
		const existingHotel = await db.tableCategory.findMany({
			where: {
				HotelId: { equals: hotel_id }
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
			message: "Hotel's Category Fetched",
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
