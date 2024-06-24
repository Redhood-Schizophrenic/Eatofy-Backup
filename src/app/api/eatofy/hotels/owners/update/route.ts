import { update_hotel_owner } from "./logic";

export async function PUT(request: Request) {
	try {
		const data = await request.json();
		const result = await update_hotel_owner(data);
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
				message: `Error Updating Hotel's Owner: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

