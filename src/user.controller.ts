import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async listAll(): Promise<User[]> {
    return this.userService.listAll();
  }

  @Get(':id')
  getBy(@Param() params): Promise<User> {
    return this.userService.getById(params.id);
  }

  @Post()
  save(@Body() user: User): User {
    console.log('saving user', user);
    this.userService.save(user);
    return user;
  }
}
