import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum RolUser {
  ADMIN = 0,
  INVESTIGATOR = 1,
  DECISION = 3,
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  rol: RolUser;
}
