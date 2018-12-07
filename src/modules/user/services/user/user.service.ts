import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto';
import * as admin from 'firebase-admin';
import { UserEntity } from '../../entity/User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: CreateUserDto) {
    const userRecord = await admin.auth().createUser({
      displayName: data.name,
      email: data.email,
      password: data.password,
    });
    await admin.auth().setCustomUserClaims(userRecord.uid, { rol: data.rol });
    const userEntity = this.userRepository.create();
    userEntity.rol = data.rol;
    userEntity.name = data.name;
    userEntity.email = data.email;
    await this.userRepository.save(userEntity);
  }
}
