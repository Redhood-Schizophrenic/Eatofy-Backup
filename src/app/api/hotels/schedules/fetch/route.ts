import { fetch_hotel_response } from "./logic";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_hotel_response(data);
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
				message: `Error Fetching Hotel's Schedule: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
