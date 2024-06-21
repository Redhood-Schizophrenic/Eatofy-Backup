import { z } from "zod";

const nameValidation = z
	.string()
	.max(30, { message: "Invalid Name." });

const idValidation = z
	.string({ message: "Invalid Id." });

export const add_table_category = z.object({
	category_name: nameValidation,
	hotel_id: idValidation
});
