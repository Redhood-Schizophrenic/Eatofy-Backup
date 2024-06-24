import db from '@/lib/db';
import { Tasks_Response } from '@/types/TasksResponse';

export async function update_task(data: any): Promise<Tasks_Response> {
	try {

		const task_id: string | null = data['task_id'];
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
		const existingTask = await db.tasks.findMany({
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

		const task_updated: any = await db.tasks.update({
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
			message: "Task Updated",
			output: task_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

