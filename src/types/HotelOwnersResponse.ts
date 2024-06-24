import { Hotel_Owners } from "@prisma/client";

export interface HotelOwnersResponse {
	returncode: number;
	message: string;
	output: Array<Hotel_Owners> | Array<void> | Hotel_Owners[]
} 
