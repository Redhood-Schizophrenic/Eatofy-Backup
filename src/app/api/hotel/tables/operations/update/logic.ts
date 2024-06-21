import db from '@/lib/db';
import { TablesResponse } from '@/types/TablesResponse';

export async function update_table(data: any): Promise<TablesResponse> {
	try {

		const table_id: string | null = data['table_id'];
		const table_name: string | null = data['table_name'];
		const description: string | null = data['description']
		const status: string | null = data['status'];
		const persons_occupiable: number | null = data['persons_occupiable'];

		// Default Invalid Checker
		if (table_id == null || table_name == null || description == null || status == null || persons_occupiable == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Check whether Table exists
		const existingTable = await db.tables.findMany({
			where: {
				id: { equals: table_id }
			}
		});

		if (existingTable.length == 0) {
			return {
				returncode: 307,
				message: "Table doesn't Exists, please add one.",
				output: []
			}
		}

		const table_updated: any = await db.tables.update({
			where: {
				id: table_id
			},
			data: {
				TableName: table_name,
				TableDescription: description,
				Status: status,
				PersonsOccupiable: persons_occupiable
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Updated",
			output: table_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

