import db from '@/lib/db';
import { TablesResponse } from '@/types/TablesResponse';

export async function fetch_table(data: any): Promise<TablesResponse> {
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

		// If Hotel doesn't exists
		const existingTable = await db.tables.findMany({
			where: {
				id: table_id
			},
			include: {
				Category: true
			}
		});

		if (existingTable.length == 0) {
			return {
				returncode: 307,
				message: "Table doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Fetched",
			output: existingTable
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
