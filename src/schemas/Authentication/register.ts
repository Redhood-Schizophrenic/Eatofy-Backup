import { z } from "zod";

const usernameValidation = z
	.string()
	.min(2, {message: "Username must be atleast 2 characters."})
	.max(20, {message: "Username must be atmost 20 characters."})
	.regex(/^[a-zA-Z0-9_]+$/, {message: "Username must not contain special charcters."})

const emailValidation = z
	.string()
	.email({message: 'Invalid Email Address.'})

const passwordValidation = z
	.string()
	.min(6, {message: "Password must be atleast 6 characters."})

export const register = z.object({
	username: usernameValidation,
	email: emailValidation,
	password: passwordValidation
})

