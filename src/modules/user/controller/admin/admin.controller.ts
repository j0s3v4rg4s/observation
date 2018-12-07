import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import { UserService } from '../../services/user/user.service';

@Controller('admin')
export class AdminController {
  constructor(private userService: UserService) {}

  @Post('create-user')
  async createUSer(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
