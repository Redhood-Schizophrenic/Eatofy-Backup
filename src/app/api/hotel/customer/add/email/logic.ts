import db from '@/lib/db';
import { Customers } from '@prisma/client';
import { CRMResponse } from '@/types/CustomerResponse';
import { customerEmailSchema } from '@/schemas/Customers/email';
import { ZodError } from 'zod';

export async function add_customer_details(data: any): Promise<CRMResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const customer_name: string | null = data['customer_name'];
		const email: string | null = data['email'];

		// Default Invalid Checker
		if (customer_name == null || email == null || hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			customerEmailSchema.parse(data);
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
				HotelId: hotel_id
			}
		});

		if (existingUsername.length != 0) {
			return {
				returncode: 307,
				message: 'Username Exists, please login',
				output: []
			}
		}

		const existingEmail = await db.customers.findMany({
			where: {
				Email: email,
				HotelId: hotel_id
			}
		});

		if (existingEmail.length != 0) {
			return {
				returncode: 307,
				message: 'User Email Exists, please login',
				output: []
			}
		}

		// Inserting the Customer's Data
		const result: Customers[] | any = await db.customers.create({
			data: {
				HotelId: hotel_id,
				CustomerName: customer_name,
				Email: email
			}
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Customer Added",
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

