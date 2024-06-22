import { z } from "zod";

const customer_id = z
	.string();

const customer_name = z
	.string()
	.max(30, { message: "Invalid Customer Name" });

const contact = z
	.string()
	.min(10, { message: "Contact must be atleast 10 characters." })
	.max(12, { message: "Contact must be atmost 12 characters." });


const email = z
	.string()
	.email( { message: "Invalid Email id" } )

export const customerUpdateSchema = z.object({
	customer_id,
	customer_name,
	contact,
	email
});
