import db from '@/lib/db';
import { Tasks } from '@prisma/client';
import { Tasks_Response } from '@/types/TasksResponse';
import { Task_Schema } from '@/schemas/Tasks/add';
import { ZodError } from 'zod';

export async function add_task(data: any): Promise<Tasks_Response> {
	try {

		const task: string | null = data['task'];
		const date: string | null = data['date'];
		const status: string | null = data['status']

		// Default Invalid Checker
		if (task == null || date == null || status == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Zod Input Checker
		try {
			Task_Schema.parse(data);
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

		// Inserting the Tasks
		const result: Tasks[] | any = await db.tasks.create({
			data: {
				Task: task,
				CompletionDate: date,
				Status: status
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Task Added",
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

