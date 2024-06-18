import { add_subscriptions } from "./logic";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await add_subscriptions(data);
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
				message: `Error Adding Subscriptions: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

