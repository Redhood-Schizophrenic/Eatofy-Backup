import { z } from "zod";

const hotelIdValidation = z
	.string({ message: "Invalid Hotel Id" });

const subscriptionIdValidation = z
	.string({ message: "Invalid Subscription Id" });

const Validation = z
	.boolean({ message: "Invalid Hotel Id" });

const DateValidation = z
	.string()
	.datetime({ message: "Invalid Date Format" });

export const hotel_subscription_add = z.object({
	hotel_id: hotelIdValidation,
	subscription_id: subscriptionIdValidation,
	is_valid: Validation,
	start_date: DateValidation,
	end_date: DateValidation,
})
