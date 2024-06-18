import db from '@/lib/db';
import { HotelScheduleResponse } from '@/types/HotelScheduleResponse';
import HotelSchedule from '@/model/HotelSchedule';
import { schedule_add } from '@/schemas/Hotels/Schedules/add';
import { ZodError } from 'zod';

export async function add_hotel_schedule(data: any): Promise<HotelScheduleResponse> {
	try {

		const day: string | null = data['day'];
		const open_time: string | null = data['open_time'];
		const close_time: string | null = data['close_time'];
		const hotel_id: string | null = data['hotel_id']

		// Default Invalid Checker
		if (day == null || open_time == null || close_time == null || hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var Schema = schedule_add.parse(data);
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

		// Inserting the Hotel Schedule
		const result: HotelSchedule[] = await db.hotel_Schedule.create({
			data: {
				Day: day,
				OpeningTime: open_time,
				ClosingTime: close_time,
				HotelId: hotel_id
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Schedule Added",
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

