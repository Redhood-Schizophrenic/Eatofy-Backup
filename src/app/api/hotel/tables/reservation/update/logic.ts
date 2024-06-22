import db from '@/lib/db';
import { ReservationResponse } from '@/types/ReservationResponse';
import { ReservationUpdateSchema } from '@/schemas/Reservation/update';

export async function update_table_reservation(data: any): Promise<ReservationResponse> {
	try {

		const occasion: string | null = data['occasion'];
		const date: string | null = data['date'];
		const time: string | null = data['time'];
		const reservation_id: string | null = data['reservation_id']

		// Default Invalid Checker
		if (occasion == null || date == null || time == null || reservation_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			ReservationUpdateSchema.parse(data);
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

		// Existing Table
		const existingTableReservation = await db.tableReservation.findMany({
			where: {
				id: reservation_id
			}
		});

		if (existingTableReservation.length == 0) {
			return {
				returncode: 307,
				message: "Table Reservation doesn't Exists, please add one.",
				output: []
			}
		}

		const reservation_updated: any = await db.tableReservation.update({
			where: {
				id: reservation_id
			},
			data: {
				Occasion: occasion,
				Date: date,
				Time: time
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Reservation Updated",
			output: reservation_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

