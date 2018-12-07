import { Get, Controller, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './modules/user/entity/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  async root() {
    return 'connected';
  }
}
