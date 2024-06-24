
import { z } from "zod";

const hotelNameValidation = z
	.string();

const emailValidation = z
	.string()
	.email({message: 'Invalid Email Address.'});

const passwordValidation = z
	.string()
	.min(6, {message: "Password must be atleast 6 characters."});

const addressValidation = z
	.string({message: 'Invalid Address.'});

const specialityValidation = z
	.string({message: 'Invalid Speciality.'});

const ratingsValidation = z
	.string({message: 'Invalid Ratings.'})

const contactValidation = z
	.string({message: 'Invalid Contact Validation.'});

const websiteValidation = z
	.string()
	.optional();

const fssaiValidation = z
	.string();

export const hotel_add = z.object({
	hotel_name: hotelNameValidation,
	email: emailValidation,
	password: passwordValidation,
	address: addressValidation,
	speciality: specialityValidation,
	ratings: ratingsValidation,
	contact: contactValidation,
	website: websiteValidation,
	fssai_code: fssaiValidation
})

