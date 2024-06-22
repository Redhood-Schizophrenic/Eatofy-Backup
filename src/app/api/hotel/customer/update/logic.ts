import db from '@/lib/db';
import { CRMResponse } from '@/types/CustomerResponse';
import { customerUpdateSchema } from '@/schemas/Customers/update';
import { ZodError } from 'zod';

export async function update_customer(data: any): Promise<CRMResponse> {
	try {

		const customer_id: string | null = data['customer_id'];
		const customer_name: string | null = data['customer_name'];
		const contact: string | null = data['contact'];
		const email: string | null = data['email'];

		// Default Invalid Checker
		if (customer_name == null || contact == null || email == null || customer_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			customerUpdateSchema.parse(data);
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

		// Existing User
		const existingUsername = await db.customers.findMany({
			where: {
				CustomerName: customer_name,
				id: customer_id
			}
		});

		if (existingUsername.length == 0) {
			return {
				returncode: 307,
				message: "Username doesn't Exists, please register",
				output: []
			}
		}

		const customer_updated: any = await db.customers.update({
			where: {
				id: customer_id
			},
			data: {
				CustomerName: customer_name,
				Contact: contact,
				Email: email
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Customer Updated",
			output: customer_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

