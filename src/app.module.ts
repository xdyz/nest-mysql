import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MenuModule } from './modules/menu/menu.module'
import database from './configs/database'
console.log(database)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule,
    UserModule,
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
