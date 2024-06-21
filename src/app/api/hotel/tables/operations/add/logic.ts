import db from '@/lib/db';
import { Tables } from '@prisma/client';
import { TablesResponse } from '@/types/TablesResponse';
import { add_tables } from '@/schemas/Hotel/Tables/add';
import { ZodError } from 'zod';

export async function table_add(data: any): Promise<TablesResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const category_id: string | null = data['category_id'];
		const table_name: string | null = data['table_name'];
		const description: string | null = data['description']
		const status: string | null = data['status'];
		const persons_occupiable: number | null = data['persons_occupiable'];

		// Default Invalid Checker
		if (hotel_id == null || category_id == null || table_name == null || description == null || status == null || persons_occupiable == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			add_tables.parse(data);
		} catch (error: ZodError | any) {
			try {
				const err = JSON.parse(error.message);
				let error_message = '';
				await (err as any).forEach((obj: any) => {
					error_message = obj.message;
				});

				return {
					returncode: 400,
					message: error_message,
					output: []
				};


			} catch (error: any) {
				return {
					returncode: 400,
					message: error.message,
					output: []
				};

			}
		}

		// Inserting the Subscription Data
		const result: Tables[] | any = await db.tables.create({
			data: {
				HotelId: hotel_id,
				CategoryId: category_id,
				TableName: table_name,
				TableDescription: description,
				Status: status,
				PersonsOccupiable: persons_occupiable
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscription Added",
			output: result
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

