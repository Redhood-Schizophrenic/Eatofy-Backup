import db from '@/lib/db';
import { ReservationResponse } from '@/types/ReservationResponse';

export async function delete_table_reservation(data: any): Promise<ReservationResponse> {
	try {

		const reservation_id: string | null = data['reservation_id'];

		// Default Invalid Checker
		if (reservation_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Table Reservation doesn't exists
		const existingTableReservation = await db.tableReservation.findMany({
			where: {
				id: { equals: reservation_id }
			}
		});

		if (existingTableReservation.length == 0) {
			return {
				returncode: 307,
				message: "Table Reservation doesn't Exists, please register",
				output: []
			}
		}

		// Deleting the Table Reservation
		await db.tableReservation.delete({
			where: {
				id: reservation_id,
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Reservation Deleted",
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

