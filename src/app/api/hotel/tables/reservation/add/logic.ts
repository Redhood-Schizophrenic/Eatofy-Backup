import db from '@/lib/db';
import { TableReservation } from '@prisma/client';
import { ReservationResponse } from '@/types/ReservationResponse'; 
import { ReservationSchema } from '@/schemas/Reservation/add';
import { ZodError } from 'zod';

export async function add_reservation(data: any): Promise<ReservationResponse> {
	try {

		const occasion: string | null = data['occasion'];
		const date: string | null = data['date'];
		const time: string | null = data['time'];
		const customer_id: string | null = data['customer_id']
		const table_id: string | null = data['table_id'];
		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if (occasion == null || date == null || time == null || table_id == null || customer_id == null || hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			ReservationSchema.parse(data);
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
		const existingTable = await db.tables.findMany({
			where: {
				id: table_id
			}
		});

		if (existingTable.length == 0) {
			return {
				returncode: 307,
				message: "Table doesn't Exists, please add one.",
				output: []
			}
		}

		// Existing Customer
		const existingCustomer = await db.customers.findMany({
			where: {
				id: customer_id
			}
		});

		if (existingCustomer.length == 0) {
			return {
				returncode: 307,
				message: "Customer doesn't Exists, please add one.",
				output: []
			}
		}

		// Existing Hotel
		const existingHotel = await db.hotels.findMany({
			where: {
				id: hotel_id
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please add one.",
				output: []
			}
		}

		// Inserting the Reservation Data
		const result: TableReservation[] | any = await db.tableReservation.create({
			data: {
				Occasion: occasion,
				Date: date,
				Time: time,
				CustomerId: customer_id,
				TableId: table_id,
				HotelId: hotel_id
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Table Reservation Added",
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

