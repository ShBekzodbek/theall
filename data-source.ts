import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  // TODO configure it
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'bekzodbek',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
