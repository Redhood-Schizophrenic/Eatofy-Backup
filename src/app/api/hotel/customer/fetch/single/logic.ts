import db from '@/lib/db';
import { CRMResponse } from '@/types/CustomerResponse';

export async function fetch_customer(data: any): Promise<CRMResponse> {
	try {

		const customer_id: string | null = data['customer_id'];

		// Default Invalid Checker
		if (customer_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Customer doesn't exists
		const existingCustomer = await db.customers.findMany({
			where: {
				id: customer_id
			}
		});

		if (existingCustomer.length == 0) {
			return {
				returncode: 307,
				message: "Customer doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Customer Fetched",
			output: existingCustomer
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
