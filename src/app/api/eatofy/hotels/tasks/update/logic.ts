import db from '@/lib/db';
import { HotelTasksResponse } from '@/types/HotelTaskResponse';

export async function update_hotel_task(data: any): Promise<HotelTasksResponse> {
	try {

		const task_id: string | null = data['hotel_id'];
		const status: string | null = data['status']
	
		// Default Invalid Checker
		if (task_id == null || status == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Check whether Task exists
		const existingHotelTask = await db.hotel_Tasks.findMany({
			where: {
				id: { equals: task_id }
			}
		});

		if (existingHotelTask.length == 0) {
			return {
				returncode: 307,
				message: "Hotel's Task doesn't Exists.",
				output: []
			}
		}

		const hotel_task_updated: any = await db.hotel_Tasks.update({
			where: {
				id: task_id
			},
			data: {
				Status: status
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Task Updated",
			output: hotel_task_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

