import db from '@/lib/db';
import { Hotel_Owners } from '@prisma/client';
import { hotelOwnersSchema } from '@/schemas/Hotels/Owners/add';
import { HotelOwnersResponse } from '@/types/HotelOwnersResponse';
import { hashing } from '@/lib/utils/hashing';
import { ZodError } from 'zod';

export async function add_hotel_owner(data: any): Promise<HotelOwnersResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const owner_name: string | null = data['owner_name'];
		const email: string | null = data['email'];
		const password: string | null = data['password'];

		// Default Invalid Checker
		if (hotel_id == null || owner_name == null || email == null || password == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}
		}

		// Zod Input Checker
		try {
			hotelOwnersSchema.parse(data);
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

		// Email Exists
		const existingEmail = await db.hotel_Owners.findMany({
			where: {
				Email: { equals: email }
			}
		});

		if (existingEmail.length != 0) {
			return {
				returncode: 307,
				message: 'Owner Email Exists.',
				output: []
			}
		}

		const HashedPassword = await hashing(password);

		// Inserting the Owners Data
		const result: Hotel_Owners[] | null = await db.hotel_Owners.create({
			data: {
				HotelId: hotel_id,
				OwnerName: owner_name,
				Email: email,
				HashedPassword: HashedPassword,
				SaltPassword: '10'
			},
		});

		db.$disconnect();

		if (result != null) {
			return {
				returncode: 200,
				message: "Hotel Owner Added",
				output: result
			};
		}
		else {
			return {
				returncode: 500,
				message: 'Error Inserting Owner',
				output: []
			}
		}

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

