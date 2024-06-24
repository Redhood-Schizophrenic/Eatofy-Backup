import db from '@/lib/db';
import { Hotel_Tasks } from '@prisma/client';
import { HotelTasksResponse } from '@/types/HotelTaskResponse';
import { TaskSchema } from '@/schemas/Hotels/Tasks/add';
import { ZodError } from 'zod';

export async function add_hotel_subscription(data: any): Promise<HotelTasksResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const task: string | null = data['task'];
		const date: string | null = data['date'];
		const status: string | null = data['status']

		// Default Invalid Checker
		if (hotel_id == null || task == null || date == null || status == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Zod Input Checker
		try {
			TaskSchema.parse(data);
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
		const result: Hotel_Tasks[] = await db.hotel_Tasks.create({
			data: {
				HotelId: hotel_id,
				Task: task,
				CompletionDate: date,
				Status: status
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

