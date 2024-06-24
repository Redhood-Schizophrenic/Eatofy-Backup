import { z } from "zod";

const subscriptionNameValidation = z
	.string();

const priceValidation = z
	.string( {message: "Invalid Price"} );

const validityValidation = z
	.number( { message: "Invalid Validity" } );

export const subscriptions_add = z.object({
	subscription_name: subscriptionNameValidation,
	price: priceValidation,
	validity: validityValidation
});
