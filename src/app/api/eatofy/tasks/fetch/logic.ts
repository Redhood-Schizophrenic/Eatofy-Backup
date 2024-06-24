import db from '@/lib/db';
import { Tasks_Response } from '@/types/TasksResponse';

export async function fetch_tasks(): Promise<Tasks_Response> {
	try {

		const existingTasks = await db.tasks.findMany();

		if (existingTasks.length == 0) {
			return {
				returncode: 307,
				message: "Tasks doesn't Exists, please add one",
				output: []
			}
		}

		db.$disconnect();

		return {
			returncode: 200,
			message: "Tasks Fetched",
			output: existingTasks
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
};
