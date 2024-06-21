import { NextResponse } from "next/server";
import { login_hotel } from "./logic";
export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await login_hotel(data);
		return NextResponse.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output,
				token: result.token
			},
			{
				headers: { 'Set-Cookie': `token=${result.token}` }
			}
		);
	}
	catch (error: any) {
		return NextResponse.json(
			{
				returncode: 500,
				message: `Error Authenticating user: ${error.message}`,
				output: []
			}
		);
	}
}

