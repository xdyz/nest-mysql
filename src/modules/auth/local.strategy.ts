import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
<<<<<<< HEAD
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
=======
import { Injectable, UnauthorizedException } from '@nestjs/common'
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password)
    if (!user) {
<<<<<<< HEAD
      throw new HttpException('用户名或者密码存在错误', HttpStatus.OK)
=======
      throw new UnauthorizedException('用户名或者密码存在错误')
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
    }
    return user
  }
}
