import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true
}
