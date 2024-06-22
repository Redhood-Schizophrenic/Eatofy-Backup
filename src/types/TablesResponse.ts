import { Tables } from "@prisma/client";
import { TableCategory } from "@prisma/client";
import { TableReservation } from "@prisma/client";

export interface TablesResponse {	
	returncode: number;
	message: string;
	output: Array<Tables> | Array<void> | Tables[]
}

export interface TableCategoryResponse {
	returncode: number;
	message: string;
	output: Array<TableCategory> | Array<void> | TableCategory[]

}

export interface TableReservationResponse {
	returncode: number;
	message: string;
	output: Array<TableReservation> | Array<void> | TableReservation[]
}
