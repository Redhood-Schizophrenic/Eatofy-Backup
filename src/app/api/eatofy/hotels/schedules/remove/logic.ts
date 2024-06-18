import db from '@/lib/db';
import { HotelScheduleResponse } from '@/types/HotelScheduleResponse';

export async function delete_hotel(data: any): Promise<HotelScheduleResponse> {
	try {

		const schedule_id: string | null = data['schedule_id'];

		// Default Invalid Checker
		if (schedule_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Hotel doesn't exists
		const existingHotel = await db.hotel_Schedule.findMany({
			where: {
				id: { equals: schedule_id }
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Schedule doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Schedule
		await db.hotel_Schedule.delete({
			where: {
				id: schedule_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Schedule Deleted",
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

