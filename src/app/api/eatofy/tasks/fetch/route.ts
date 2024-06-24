import { fetch_tasks } from "./logic";

export async function GET() {
	try {
		const result = await fetch_tasks();
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
				message: `Error Fetching Tasks: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

