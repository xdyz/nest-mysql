import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Inject,
  Get
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/auth.dto'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  @Inject()
  private authService: AuthService

  @Post('/login')
  @ApiOperation({
    summary: '用户登录', // 简单接口描述 说明接口用于干嘛的
    description: '用户名和密码登录，获取token' //  更具体的描述 陈述说明
  })
  @UseGuards(AuthGuard('local'))
  login(@Body() loginDto: LoginDto, @Request() req) {
    console.log(loginDto)
    return this.authService.login(req.user)
  }
}
