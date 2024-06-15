import User from '../model/User.ts';

export interface UserResponse {
	returncode: Number;
	message: string;
	output: Array<User> | Array<void>
}

