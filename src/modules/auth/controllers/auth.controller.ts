import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
  Inject
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDto } from '../dtos/login.dto'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../services/auth.service'

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
    return this.authService.login(req.user)
  }

  @Get('/info')
  @ApiOperation({
    summary: '获取用户信息 根据tokens',
    description: '根据用户token获取用户的信息'
  })
  @UseGuards(AuthGuard('jwt'))
  // req.usr 就是token 通过jwt方法 解析出来的数据 里面包含用户的id 和 名称
  getUserInformation(@Request() req) {
    const { id } = req.user
    return this.authService.getAuthInfo(id)
  }
}
