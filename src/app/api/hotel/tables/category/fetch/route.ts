import { fetch_table_category } from "./logic";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_table_category(data);
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
				message: `Error Fetching Hotel's Categories: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
