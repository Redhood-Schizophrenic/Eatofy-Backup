import db from '../../../../lib/db';
import { HotelResponse } from '@/types/HotelResponse';

export async function fetch_hotel(data: any): Promise<HotelResponse> {
	try {

		const hotel_name: string | null = data['hotel_name'];

		// Default Invalid Checker
		if (hotel_name === null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// If Hotel doesn't exists
		const existingHotel = await db.hotels.findMany({
			where: {
				HotelName: { equals: hotel_name }
			}
		});

		if (existingHotel.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please add one",
				output: []
			}
		}

		existingHotel.forEach(hotel => {
			hotel.HotelLogo = hotel.HotelLogo?.toString('base64');
		});

		return {
			returncode: 200,
			message: "Hotel Fetched",
			output: existingHotel
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}


export async function fetch_hotels(): Promise<HotelResponse> {
	try {

		// If Hotel doesn't exists
		const existingHotels = await db.hotels.findMany();

		if (existingHotels.length == 0) {
			return {
				returncode: 307,
				message: "Hotel doesn't Exists, please add one",
				output: []
			}
		}

		existingHotels.forEach(hotel => {
			hotel.HotelLogo = hotel.HotelLogo?.toString('base64');
		});

		return {
			returncode: 200,
			message: "Hotels Fetched",
			output: existingHotels
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
