import db from '@/lib/db';
import { HotelResponse } from '@/types/HotelResponse';
import Hotels from '@/model/Hotels';
import { hashing } from '@/lib/utils/hashing';

export async function add_hotel(data: any): Promise<HotelResponse> {
	try {

		const hotel_name: string | null = data.get('hotel_name');
		const email: string | null = data.get('email');
		const password: string | null = data.get('password');
		const address: string | null = data.get('address');
		const speciality: string | null = data.get('speciality');
		const contacts: string | null = data.get('contacts');
		const website: string | null = data.get('website');
		const fssai_code: string | null = data.get('fssai_code');
		const logo: File | null = data.get('logo');

		// Default Invalid Checker
		if (hotel_name == null || email == null || password == null || address == null || speciality == null || contacts == null || website == null || logo == null || fssai_code == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		const array_buffer = await logo.arrayBuffer();
		const uint8array = new Uint8Array(array_buffer);
		const buffer = Buffer.from(uint8array);
		const HashedPassword = await hashing(password);

		// Inserting the Hotel
		const result: Hotels[] = await db.hotels.create({
			data: {

				HotelName: hotel_name,
				Email: email,
				HashedPassword: HashedPassword,
				SaltPassword: "10",
				Address: address,
				Speciality: speciality.split(',').map((s: any) => s.trim()),
				HotelLogo: buffer,
				Contacts: contacts.split(',').map((s: any) => s.trim()),
				Website: website,
				FSSAICode: fssai_code
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Hotel Added",
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

