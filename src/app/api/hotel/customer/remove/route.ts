import { delete_customer } from "./logic";

export async function DELETE(request: Request) {
	try {
		const data = await request.json();
		const result = await delete_customer(data);
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
				message: `Error Deleting Customer: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

