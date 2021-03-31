import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
  UsePipes,
  UseGuards,
  Inject
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import {
  CreateUserDto,
  GetUsersDto,
  GetUserInfoParamsDto
} from './dto/users.dto'
import {
  GetUsersListQueryTransform,
  GetUserInfoQueryTransform
} from './pipes/user.pipe'

@ApiTags('用户管理') // 设置swagger 分类 用于区分是哪个类别的接口 或者是界面 功能等
@Controller('user')
// 身份验证守卫 判断是否有token 如果没有或者token 失效  就返回401 如果正常 就解析token 返回token中的参数给 jwt.strategy.ts 中的validate 方法
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt') // 这里jwt名字与main.ts addBearerAuth 第二个名字要一致
export class UserController {
  @Inject()
  private readonly userService: UserService

  @Get('/info')
  @ApiOperation({
    summary: '获取用户信息',
    description: '根据用户token获取用户的信息'
  })
  getUserInformation() {
    return '123'
  }

  @Get(':id')
  @ApiOperation({
    summary: '获取用户信息',
    description: '根据用户id获取用户的信息'
  })

  // 先将id 数据转为数字，然后 校验是否正常
  @UsePipes(GetUserInfoQueryTransform, ValidationPipe)
  async getUserInfo(@Param() getInfoParams: GetUserInfoParamsDto) {
    return await getInfoParams
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
  @UsePipes(GetUsersListQueryTransform, ValidationPipe)
  getUsers(
    @Query()
    queryUsers: GetUsersDto
  ) {
    return this.userService.getPageData(queryUsers)
  }
}
