import db from '@/lib/db';
import { SubscriptionResponse } from '@/types/SubscriptionsResponse';

export async function fetch_subscription(data: any): Promise<SubscriptionResponse> {
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

		// If Hotel doesn't exists
		const existingSubscription = await db.subscriptions.findMany({
			where: {
				id: { equals: subscription_id }
			}
		});

		if (existingSubscription.length == 0) {
			return {
				returncode: 307,
				message: "Subscription doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscription Fetched",
			output: existingSubscription
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};

export async function fetch_subscriptions(): Promise<SubscriptionResponse> {
	try {

		const existingSubscriptions = await db.subscriptions.findMany();

		if (existingSubscriptions.length == 0) {
			return {
				returncode: 307,
				message: "Subscription doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscriptions Fetched",
			output: existingSubscriptions
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
