import { z } from "zod";

const smallStringValidation = z
	.string()
	.max(30, { message: "Extra Space taken." });

const nameValidation = z
	.string()
	.max(30, { message: "Invalid Name." });

const descriptionValidation = z
	.string( { message: "Invalid Description." } );


const idValidation = z
	.string({ message: "Invalid Id." });


const IntValidation = z
	.number( { message: "Invalid Number." } );

export const tables_update = z.object({
	table_name: nameValidation,
	description: descriptionValidation,
	table_id: idValidation,
	status: smallStringValidation,
	persons_occupiable: IntValidation
});
