import db from '@/lib/db';
import { add_table_category } from '@/schemas/Hotel/Tables/Category/add';
import { TableCategoryResponse } from '@/types/TablesResponse';
import { TableCategory } from '@prisma/client';
import { ZodError } from 'zod';

export async function addTableCategory(data: any): Promise<TableCategoryResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const category_name: string | null = data['category_name'];

		// Default Invalid Checker
		if (hotel_id == null  || category_name==null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			add_table_category.parse(data);
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

		// Inserting the Table's Category Data
		const result: TableCategory[] | any = await db.tableCategory.create({
			data: {
				HotelId: hotel_id,
				CategoryName: category_name
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Category Added",
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

