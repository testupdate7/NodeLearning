import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Get("profile/:id/:name")
    getProfile(@Param("id") id: string ,@Param("name") name: string) {
        return this.usersService.getProfile(id, name);
    }
}
