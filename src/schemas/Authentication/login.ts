import { z } from "zod";

const emailValidation = z
	.string()
	.email({message: 'Invalid Email Address.'});

const passwordValidation = z
	.string()
	.min(6, {message: "Password must be atleast 6 characters."});

export const login = z.object({
	email: emailValidation,
	password: passwordValidation
});
