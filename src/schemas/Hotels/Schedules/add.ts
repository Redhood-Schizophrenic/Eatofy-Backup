import { z } from "zod";

const idValidator = z
	.string()

const dayValidation = z
	.string()
	.includes("day", { message: "Must be a working day. e.g; Monday, Tuesday, etc." })
	.max(10, { message: "Day must not be of 10 characters." });

const timeValidator = z
	.string()
	.time({ message: "Valid Time Format is 24 Hour of 'HH:MM:SS'." });

export const schedule_add = z.object({
	hotel_id: idValidator,
	day: dayValidation,
	open_time: timeValidator,
	close_time: timeValidator
})
