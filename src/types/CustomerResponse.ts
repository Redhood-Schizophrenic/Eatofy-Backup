import { Customers } from "@prisma/client";

export interface CRMResponse {	
	returncode: number;
	message: string;
	output: Array<Customers> | Array<void> | Customers[]
}

