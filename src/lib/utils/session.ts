import jwt from 'jsonwebtoken';

export function create_session(data: any){
	if (data.id != null && data.id != undefined) {
		const token = jwt.sign({ data: data.id }, process.env.JWT_SECRET);
		return token;
	}
}
