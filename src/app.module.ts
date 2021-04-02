import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
<<<<<<< HEAD
import { MenuModule } from './modules/menu/menu.module'
import database from './configs/database'
console.log(database)
=======
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7

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
<<<<<<< HEAD
    UserModule,
    MenuModule
=======
    UserModule
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
