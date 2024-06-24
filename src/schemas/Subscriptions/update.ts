import { z } from "zod";

const subscriptionIdValidation = z
	.string( { message: "Subscription Id invalid." } );

const subscriptionNameValidation = z
	.string();

const priceValidation = z
	.string( {message: "Invalid Price"} );

const validityValidation = z
	.number( { message: "Invalid Validity" } );

export const subscriptions_update = z.object({
	subscription_id: subscriptionIdValidation,
	subscription_name: subscriptionNameValidation,
	price: priceValidation,
	validity: validityValidation
});
