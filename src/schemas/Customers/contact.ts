
import { z } from "zod";

const hotel_id = z
	.string();

const customer_name = z
	.string()
	.max(30, { message: "Invalid Customer Name" });

const contact = z
	.string()
	.min(10, { message: "Contact must be atleast 10 characters." })
	.max(12, { message: "Contact must be atmost 12 characters." });


export const customerContactSchema = z.object({
	hotel_id,
	customer_name,
	contact
});
