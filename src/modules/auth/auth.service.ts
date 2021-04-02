<<<<<<< HEAD
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
=======
import { Inject, Injectable } from '@nestjs/common'
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  @Inject()
  private readonly userService: UserService
  @Inject()
  private readonly jwtService: JwtService

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username)

    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
<<<<<<< HEAD
  }

  async getAuthInfo(id: number) {
    const user = await this.userService.findOneById(id)
    if (!user) throw new HttpException('用户不存在', HttpStatus.OK)
    const { password, ...rest } = user
    return { ...rest }
=======
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
  }
}
