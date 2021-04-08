import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from './services/auth.service'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strateges/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants/auth.constants'
import { JwtStrategy } from './strateges/jwt.strategy'
import { AuthController } from './controllers/auth.controller'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10h' }
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
