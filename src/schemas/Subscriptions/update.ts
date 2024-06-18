import { z } from "zod";

const subscriptionIdValidation = z
	.string( { message: "Subscription Id invalid." } )

const subscriptionNameValidation = z
	.string()
	.min(2, {message: "Subscription Name must be atleast 2 characters."})
	.max(20, {message: "Subscription Name must be atmost 20 characters."})
	.regex(/^[a-zA-Z0-9_]+$/, {message: "Subscription Name must not contain special charcters."});

const priceValidation = z
	.string( {message: "Invalid Price"} );

const validityValidation = z
	.number( { message: "Invalid Validity" } )

export const subscriptions_update = z.object({
	subscription_id: subscriptionIdValidation,
	subscription_name: subscriptionNameValidation,
	price: priceValidation,
	validity: validityValidation
});
