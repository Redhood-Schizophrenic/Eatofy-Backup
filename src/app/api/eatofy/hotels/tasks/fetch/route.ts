import { fetch_hotel_tasks } from "./logic";

export async function GET() {
	try {
		const result = await fetch_hotel_tasks();
		return Response.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output
			},
			{
				status: result.returncode
			}
		);
	}
	catch (error: any) {
		return Response.json(
			{
				returncode: 500,
				message: `Error Fetching Hotel Tasks: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

