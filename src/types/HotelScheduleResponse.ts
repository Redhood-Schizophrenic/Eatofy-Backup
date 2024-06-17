import HotelSchedule from "@/model/HotelSchedule";

export interface HotelScheduleResponse {
	returncode: Number;
	message: string;
	output: Array<HotelSchedule> | Array<void> | HotelSchedule[]
}
