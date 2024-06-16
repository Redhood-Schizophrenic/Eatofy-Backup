import User from '../model/User';

export interface UserResponse {
	returncode: Number;
	message: string;
	output: Array<User> | Array<void> | User[]
}

