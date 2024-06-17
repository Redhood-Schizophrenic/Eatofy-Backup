import db from '@/lib/db';
import { HotelResponse } from '@/types/HotelResponse';
import Hotels from '@/model/Hotels';
import { hashing } from '@/lib/utils/hashing';

export async function update_hotel(data: any): Promise<HotelResponse> {
	try {

		const hotel_name: string | null = data['hotel_name'];
		const email: string | null = data['email'];
		const password: string | null = data['password'];
		const address: string | null = data['address'];
		const speciality: string[] | null = data['speciality'];
		const ratings: string | null = data['ratings'];
		const contacts: string[] | null = data['contacts'];
		const website: string | null = data['website'];

		// Default Invalid Checker
		if (hotel_name == null || email == null || password == null || address == null || speciality == null || ratings == null || contacts == null || website == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		const HashedPassword = await hashing(password);

		// Check whether hotel exists
		const existingHotel = await db.hotels.findMany({
			where: {
				Email: { equals: email }
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please register",
				output: []
			}
		}

		const hotel_updated: any = await db.hotels.update({
			where: {
				Email: email,
			},
			data: {
				HotelName: hotel_name,
				Email: email,
				HashedPassword: HashedPassword,
				SaltPassword: "10",
				Address: address,
				Speciality: speciality,
				//Speciality: speciality.split(',').map((s: any) => s.trim()),
				Ratings: parseFloat(ratings),
				Contacts: contacts,
				//Contacts: contacts.split(',').map((s: any) => s.trim()),
				Website: website

			},
		});

		return {
			returncode: 200,
			message: "Hotel Updated",
			output: hotel_updated
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}

