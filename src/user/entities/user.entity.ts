import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum UserRole {
  admin = 'admin',
  user = 'user',
  superadmin = 'superadmin',
}

enum UserStatus {
  active = 'active',
  inactive = 'inactive',
  banned = 'banned',
}

enum UserLevel {
  easygoing,
  outgoing,
  gotoperson,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;

  @Column()
  status: UserStatus;

  @Column()
  level: UserLevel;
}
