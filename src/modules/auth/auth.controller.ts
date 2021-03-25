import { Body, Controller, Post, UseGuards, Request  } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/auth.dto'
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
@ApiTags('登录')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({
    summary: '用户登录', // 简单接口描述 说明接口用于干嘛的
    description: '用户名和密码登录，获取token' //  更具体的描述 陈述说明
  })
  @UseGuards(AuthGuard('local'))
  login(@Request() req,
  @Body() loginDto: LoginDto) {
    return this.authService.login(req.user);
  }
}
