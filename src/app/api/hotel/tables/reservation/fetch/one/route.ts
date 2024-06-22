import { fetch_table_reservation} from "./logic";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_table_reservation(data);
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
				message: `Error Fetching Table Reservation: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
