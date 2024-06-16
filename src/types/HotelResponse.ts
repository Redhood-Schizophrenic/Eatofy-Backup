import Hotels from "@/model/Hotels";


export interface HotelResponse {
	returncode: Number;
	message: string;
	output: Array<Hotels> | Array<void> | Hotels[]
}
