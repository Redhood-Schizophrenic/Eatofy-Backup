import db from '@/lib/db';
import { TableCategoryResponse } from '@/types/TablesResponse';

export async function delete_category(data: any): Promise<TableCategoryResponse> {
	try {

		const category_id: string | null = data['category_id'];

		// Default Invalid Checker
		if (category_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Category doesn't exists
		const existingCategory = await db.tableCategory.findMany({
			where: {
				id: { equals: category_id }
			}
		});

		if (existingCategory.length == 0) {
			return {
				returncode: 307,
				message: "Category doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Category
		await db.tableCategory.delete({
			where: {
				id: category_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Category Deleted",
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

