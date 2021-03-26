import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard('jwt')
    // }
  ]
})
export class AppModule {}
