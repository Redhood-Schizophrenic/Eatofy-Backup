import User from '../model/User';

export interface UserResponse {
	returncode: number;
	message: string;
	output: Array<User> | Array<void> | User[]
}

