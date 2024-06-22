import { z } from "zod";

const hotel_id = z
	.string();

const customer_name = z
	.string()
	.max(30, { message: "Invalid Customer Name" });

const email = z
	.string()
	.email( { message: "Invalid Email id" } )

export const customerEmailSchema = z.object({
	hotel_id,
	customer_name,
	email
});
