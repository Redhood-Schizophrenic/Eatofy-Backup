import db from '@/lib/db';
import { subscriptions_add } from '@/schemas/Subscriptions/add';
import Subscriptions from '@/model/Subscriptions';
import { SubscriptionResponse } from '@/types/SubscriptionsResponse';
import { ZodError } from 'zod';

export async function add_subscriptions(data: any): Promise<SubscriptionResponse> {
	try {

		const subscription_name: string | null = data['subscription_name'];
		const price: string | null = data['price'];
		const validity: number | null = data['validity'];

		// Default Invalid Checker
		if (subscription_name == null || price == null || validity == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var Schema = subscriptions_add.parse(data);
			Schema
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
		const result: Subscriptions[] = await db.subscriptions.create({
			data: {
				SubscriptionName: subscription_name,
				Price: parseFloat(price),
				Validity: validity
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

