import { delete_user } from "./logic";

export async function DELETE(request: Request) {
	try {
		const data = await request.json();
		const result = await delete_user(data);
		return Response.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output
			}
		);
	}
	catch (error: any) {
		return Response.json(
			{
				returncode: 500,
				message: `Error Registering user: ${error.message}`,
				output: []
			}
		);
	}
}

