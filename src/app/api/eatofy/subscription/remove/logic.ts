import db from '@/lib/db';
import { SubscriptionResponse } from '@/types/SubscriptionsResponse';

export async function delete_subscription(data: any): Promise<SubscriptionResponse> {
	try {

		const subscription_id: string | null = data['subscription_id'];

		// Default Invalid Checker
		if (subscription_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Subscription doesn't exists
		const existingSubscription = await db.subscriptions.findMany({
			where: {
				id: { equals: subscription_id }
			}
		});

		if (existingSubscription.length == 0) {
			return {
				returncode: 307,
				message: "Subscription doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Subscription
		await db.subscriptions.delete({
			where: {
				id: subscription_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscription Deleted",
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

