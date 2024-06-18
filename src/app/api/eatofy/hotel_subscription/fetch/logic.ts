import db from '@/lib/db';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';
export async function fetch_hotel_subscription(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if (hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Hotel doesn't exists
		const existingHotelSubscription = await db.hotel_Subscription.findMany({
			where: {
				HotelId: { equals: hotel_id }
			}
		});

		if (existingHotelSubscription.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Subscription Fetched",
			output: existingHotelSubscription
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};

export async function fetch_hotel_subscriptions(): Promise<HotelSubscriptionResponse> {
	try {

		const existingHotelSubscriptions = await db.hotel_Subscription.findMany();

		if (existingHotelSubscriptions.length == 0) {
			return {
				returncode: 307,
				message: "Subscriptions doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotels Subscriptions Fetched",
			output: existingHotelSubscriptions
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
