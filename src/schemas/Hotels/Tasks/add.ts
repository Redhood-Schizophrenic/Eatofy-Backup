import { z } from "zod";

const taskValidation = z
	.string();

const dateValidation = z
	.string()
	.date();

const hotel_idValidation = z
	.string();

const statusValidation = z
	.string();

export const TaskSchema = z.object({
	task: taskValidation,
	date: dateValidation,
	hotel_id: hotel_idValidation,
	status: statusValidation
}) 
