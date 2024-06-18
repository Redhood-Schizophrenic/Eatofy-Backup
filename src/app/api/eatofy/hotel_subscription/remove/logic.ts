import db from '@/lib/db';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';

export async function delete_hotel_subscription(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const hotel_subscription_id: string | null = data['hotel_subscription_id'];

		// Default Invalid Checker
		if (hotel_subscription_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Subscription doesn't exists
		const existingSubscription = await db.hotel_Subscription.findMany({
			where: {
				id: { equals: hotel_subscription_id }
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
		await db.hotel_Subscription.delete({
			where: {
				id: hotel_subscription_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Subscription Deleted",
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

