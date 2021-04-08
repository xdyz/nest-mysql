import { TypeOrmModuleOptions } from '@nestjs/typeorm'

// export const database: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'rm-bp1fjpb631fgc6hpdmo.mysql.rds.aliyuncs.com',
//   port: 3306,
//   username: 'xiangdeyizhang',
//   password: 'Zhj19940205',
//   database: 'nest',
//   // entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   autoLoadEntities: true,
//   synchronize: true
// }

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
