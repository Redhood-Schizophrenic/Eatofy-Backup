import { z } from "zod";

const subscriptionIdValidation = z
	.string({ message: "Invalid Hotel Subscription Id" });

const Validation = z
	.boolean({ message: "Invalid Hotel Id" });

export const hotel_subscription_update = z.object({
	hotel_subscription_id: subscriptionIdValidation,
	is_valid: Validation
});
