import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        return {success: true, message: 'Get Users List!'};
    }
    getProfile(id: string, name: string) {
        return {success: true, message: 'Get User Profile!', id, name};
    }
}
