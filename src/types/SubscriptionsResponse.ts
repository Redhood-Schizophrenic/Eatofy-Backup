import Subscriptions from "@/model/Subscriptions";

export interface SubscriptionResponse {
	returncode: Number;
	message: string;
	output: Array<Subscriptions> | Array<void> | Subscriptions[]
}
