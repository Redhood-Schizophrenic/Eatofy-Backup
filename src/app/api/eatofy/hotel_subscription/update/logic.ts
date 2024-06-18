import db from '@/lib/db';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';

export async function update_hotel_subscription(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const hotel_subscription_id: string | null = data['hotel_subscription_id'];
		const is_valid: boolean | null = data['is_valid'];
	
		// Default Invalid Checker
		if (hotel_subscription_id == null || is_valid == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Check whether Subscription exists
		const existingHotelSubscriptions = await db.hotel_Subscription.findMany({
			where: {
				id: { equals: hotel_subscription_id }
			}
		});

		if (existingHotelSubscriptions.length == 0) {
			return {
				returncode: 307,
				message: "Hotel's Subscription doesn't Exists, please subscribe",
				output: []
			}
		}

		const hotel_subscription_updated: any = await db.hotel_Subscription.update({
			where: {
				id: hotel_subscription_id
			},
			data: {
				isValid: is_valid
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Subscription Updated",
			output: hotel_subscription_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

