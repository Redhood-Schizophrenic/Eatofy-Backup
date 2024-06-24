import { Tasks } from "@prisma/client";

export interface Tasks_Response {
	returncode: number;
	message: string;
	output: Array<Tasks> | Array<void> | Tasks[]
} 
