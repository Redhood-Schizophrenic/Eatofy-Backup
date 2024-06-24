import { z } from "zod";

const emailValidation = z
	.string()
	.email({message: 'Invalid Email Address.'});

const passwordValidation = z
	.string()
	.min(6, {message: "Password must be atleast 6 characters."});

export const forgot_password = z.object({
	email: emailValidation,
	old_password: passwordValidation,
	new_password: passwordValidation
});
