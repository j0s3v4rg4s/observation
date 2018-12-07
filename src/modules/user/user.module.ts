import { Module } from '@nestjs/common';
import { AdminController } from './controller/admin/admin.controller';
import { UserService } from './services/user/user.service';
import { UserEntity } from './entity/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AdminController],
  providers: [UserService],
})
export class UserModule {}
