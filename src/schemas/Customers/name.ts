import { z } from "zod";

const hotel_id = z
	.string();

const customer_name = z
	.string()
	.max(30, { message: "Invalid Customer Name" });

export const customerNameSchema = z.object({
	hotel_id,
	customer_name
});
