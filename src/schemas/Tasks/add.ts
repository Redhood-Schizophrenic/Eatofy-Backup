import { z } from "zod";

const taskValidation = z
	.string();

const dateValidation = z
	.string()
	.date();

const statusValidation = z
	.string();

export const Task_Schema = z.object({
	task: taskValidation,
	date: dateValidation,
	status: statusValidation
}) 
