import db from '@/lib/db';
import { hotel_subscription_add } from '@/schemas/Subscriptions/HotelSubscriptions/add';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';
import HotelSubscription from '@/model/HotelSubscription';
import { SafeParseReturnType, ZodError } from 'zod';

export async function add_hotel_subscription(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const subscription_id: string | null = data['subscription_id'];
		const is_valid: boolean | null = data['is_valid'];
		const start_date: string | null = data['start_date'];
		const start_time: string | null = data['start_time']
		const end_date: string | null = data['end_date'];
		const end_time: string | null = data['end_time'];

		// Default Invalid Checker
		if (hotel_id == null || subscription_id == null || is_valid == null || start_date == null || end_date == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		const start: string = `${start_date}T${start_time}Z`;
		const end: string = `${end_date}T${end_time}Z`;
		data['start'] = start;
		data['end'] = end;

		//Zod Input Checker
		try {
			var Schema = hotel_subscription_add.parse(data);
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
		const result: HotelSubscription[] = await db.hotel_Subscription.create({
			data: {
				HotelId: hotel_id,
				SubscriptionId: subscription_id,
				isValid: is_valid,
				StartDate: start,
				EndDate: end
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

