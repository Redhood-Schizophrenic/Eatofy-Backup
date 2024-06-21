import db from '@/lib/db';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';

export async function delete_table(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const table_id: string | null = data['table_id'];

		// Default Invalid Checker
		if (table_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Table doesn't exists
		const existingTable = await db.tables.findMany({
			where: {
				id: { equals: table_id }
			}
		});

		if (existingTable.length == 0) {
			return {
				returncode: 307,
				message: "Table doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Table
		await db.tables.delete({
			where: {
				id: table_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Deleted",
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

