import { Hotel_Tasks } from "@prisma/client";

export interface HotelTasksResponse {
	returncode: number;
	message: string;
	output: Array<Hotel_Tasks> | Array<void> | Hotel_Tasks[]
} 
