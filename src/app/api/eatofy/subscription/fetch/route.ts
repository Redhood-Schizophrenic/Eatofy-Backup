import { fetch_subscription, fetch_subscriptions } from "./logic";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_subscription(data);
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
				message: `Error Fetching Subscriptions: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

export async function GET() {
	try {
		const result = await fetch_subscriptions();
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
				message: `Error Fetching Subscriptions: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

