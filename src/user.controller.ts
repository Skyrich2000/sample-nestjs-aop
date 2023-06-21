import { Controller, Get, Param } from '@nestjs/common';
import { User } from './domain/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Get(':id/friend')
  async getFriend(@Param('id') id: string): Promise<User[]> {
    return this.userService.getFriend(id);
  }
}
