import { resend_email } from "../resend";
import SubscriptionEmail from "@/helpers/email_senders/HotelSubscriptionAdd";
import { HotelSubscriptionResponse } from "@/types/HotelSubscriptionResponse";

export async function SubscriptionEmailSender(
	hotel_name: string,
	subscription_name: string,
	start_date: string,
	end_date: string,
	price: string,
	email: string
): Promise<HotelSubscriptionResponse> {
	try {

		await resend_email.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: [email],
			subject: 'Eatofy Subscription Purchased',
			react: SubscriptionEmail({hotel_name,subscription_name, start_date, end_date, price}),
		});

		return {
			returncode: 200,
			message: "Email Sent",
			output: []
		}
	} catch (error: any) {
		return {
			returncode: 500,
			message: `Error Sending Email: ${error.message}`,
			output: []
		}
	}
}
