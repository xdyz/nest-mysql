import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
  UsePipes
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateUserDto, GetUsersDto } from './dto/users.dto'
import { GetUserQueryTransform } from './pipes/user.pipe'
@ApiTags('用户管理') // 设置swagger 分类 用于区分是哪个类别的接口 或者是界面 功能等
@Controller('user')
export class UserController {
  @Get(':id')
  @ApiOperation({
    summary: '获取用户信息',
    description: '根据用户id获取用户的信息'
  })
  // @UsePipes()
  async getUserInfo(@Param('id', ParseIntPipe) id: number) {
    return await {
      id
    }
  }

  @Post()
  @ApiOperation({ summary: '创建用户', description: '设置用户的参数' })
  createUser(@Body(ValidationPipe) createUser: CreateUserDto) {
    console.log(createUser)
    return createUser
  }

  @Get()
  @ApiOperation({ summary: '获取用户列表', description: '根据分页获取数据' })
  // 先将page, size 数据转为数字，然后 校验是否正常
  @UsePipes(GetUserQueryTransform, ValidationPipe)
  getUsers(
    @Query()
    queryUsers: GetUsersDto
  ) {
    console.log(queryUsers)
    return queryUsers
  }
}