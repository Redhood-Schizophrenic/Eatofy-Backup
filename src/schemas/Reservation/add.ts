import { z } from "zod";

const occasionValidation = z
	.string()
	.optional();

const dateValidation = z
	.string();

const timeValidation = z
	.string()
	.time( { message: "Invalid time format." } );

const idValidation = z
	.string()
	.max(40, { message: "Invalid id format." });

export const ReservationSchema = z.object({
	occasion: occasionValidation,
	date: dateValidation,
	time: timeValidation,
	customer_id: idValidation,
	table_id: idValidation,
	hotel_id: idValidation
});
