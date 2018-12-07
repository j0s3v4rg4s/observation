import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { RolUser } from '../entity/User.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsEnum(RolUser, {
    message: '0: Admin, 1:Investigator, 2: Decision',
  })
  @IsNumber()
  @IsNotEmpty()
  readonly rol: RolUser;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
