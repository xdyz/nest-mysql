import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/auth.dto'

@ApiTags('登录')
@Controller('auth')
export class AuthController {
  @Post()
  @ApiOperation({
    summary: '用户登录', // 简单接口描述 说明接口用于干嘛的
    description: '用户名和密码登录，获取token' //  更具体的描述 陈述说明
  })
  login(@Body() loginDto: LoginDto) {
    console.log(loginDto)
    return '123'
  }
}
