import db from '@/lib/db';
import { SubscriptionResponse } from '@/types/SubscriptionsResponse';

export async function update_subscription(data: any): Promise<SubscriptionResponse> {
	try {

		const subscription_id: string | null = data['subscription_id'];
		const subscription_name: string | null = data['subscription_name'];
		const price: string | null = data['price'];
		const validity: number | null = data['validity'];
	
		// Default Invalid Checker
		if (subscription_id == null || subscription_name == null || price == null || validity==null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Check whether Subscription exists
		const existingSubscriptions = await db.subscriptions.findMany({
			where: {
				id: { equals: subscription_id }
			}
		});

		if (existingSubscriptions.length == 0) {
			return {
				returncode: 307,
				message: "Subscription doesn't Exists, please register",
				output: []
			}
		}

		const subscription_updated: any = await db.subscriptions.update({
			where: {
				id: subscription_id,
			},
			data: {
				SubscriptionName: subscription_name,
				Price: parseFloat(price),
				Validity: validity
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscription Updated",
			output: subscription_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

