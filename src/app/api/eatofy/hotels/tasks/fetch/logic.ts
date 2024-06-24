import db from '@/lib/db';
import { HotelTasksResponse } from '@/types/HotelTaskResponse';

export async function fetch_hotel_tasks(): Promise<HotelTasksResponse> {
	try {

		const existingHotelTasks = await db.hotel_Tasks.findMany();

		if (existingHotelTasks.length == 0) {
			return {
				returncode: 307,
				message: "Tasks doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Tasks Fetched",
			output: existingHotelTasks
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
