import db from '@/lib/db';
import { HotelTasksResponse } from '@/types/HotelTaskResponse';

export async function delete_hotel_task(data: any): Promise<HotelTasksResponse> {
	try {

		const task_id: string | null = data['task_id'];

		// Default Invalid Checker
		if (task_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Subscription doesn't exists
		const existingTask = await db.hotel_Tasks.findMany({
			where: {
				id: { equals: task_id }
			}
		});

		if (existingTask.length == 0) {
			return {
				returncode: 307,
				message: "Task doesn't Exists.",
				output: []
			}
		}

		// Deleting the Task
		await db.hotel_Tasks.delete({
			where: {
				id: task_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel's Task Deleted",
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

