import { TableReservation } from "@prisma/client";

export interface ReservationResponse {	
	returncode: number;
	message: string;
	output: Array<TableReservation> | Array<void> | TableReservation[]
}
