import { z } from "zod";

const hotel_id = z
	.string();

const customer_name = z
	.string()
	.max(30, { message: "Invalid Customer Name" });

const contact = z
	.string()
	.optional()


const email = z
	.string()
	.optional()

export const customerSchema = z.object({
	hotel_id,
	customer_name,
	contact,
	email
});
