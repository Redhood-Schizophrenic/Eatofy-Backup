import HotelSubscription from "@/model/HotelSubscription";
export interface HotelSubscriptionResponse {
	returncode: Number;
	message: string;
	output: Array<HotelSubscription> | Array<void> | HotelSubscription[]
}

