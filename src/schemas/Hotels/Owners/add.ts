import { z } from "zod"; 

const nameValidation = z
	.string();

const emailValidation = z
	.string()
	.email({message: 'Invalid Email Address.'});

const passwordValidation = z
	.string()
	.min(6, {message: "Password must be atleast 6 characters."});

const hotelIdValidation = z
	.string();

export const hotelOwnersSchema = z.object({
	owner_name: nameValidation,
	email: emailValidation,
	password: passwordValidation,
	hotel_id: hotelIdValidation
})
