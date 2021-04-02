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
  Inject,
  Delete,
  Put,
<<<<<<< HEAD
  ParseIntPipe
=======
  ParseIntPipe,
  Request
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import {
  CreateUserDto,
  GetUsersDto,
<<<<<<< HEAD
  GetUserInfoDto,
  UpdateUserDto
} from '../../dtos/user/index'
import {
  GetUsersListQueryTransform,
  ParamQueryUserIdTransform
} from '../../pipes/user/index.pipe'

@ApiTags('用户管理') // 设置swagger 分类 用于区分是哪个类别的接口 或者是界面 功能等
@Controller('users')
=======
  GetUserInfoParamsDto,
  UpdateUserDto
} from './dto/users.dto'
import {
  GetUsersListQueryTransform,
  ParamQueryUserIdTransform
} from './pipes/user.pipe'

@ApiTags('用户管理') // 设置swagger 分类 用于区分是哪个类别的接口 或者是界面 功能等
@Controller('user')
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
// 身份验证守卫 判断是否有token 如果没有或者token 失效  就返回401 如果正常 就解析token 返回token中的参数给 jwt.strategy.ts 中的validate 方法
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt') // 这里jwt名字与main.ts addBearerAuth 第二个名字要一致
export class UserController {
  @Inject()
  private readonly userService: UserService

<<<<<<< HEAD
=======
  @Get('/info')
  @ApiOperation({
    summary: '获取用户信息 根据tokens',
    description: '根据用户token获取用户的信息'
  })
  // req.usr 就是token 通过jwt方法 解析出来的数据 里面包含用户的id 和 名称
  getUserInformation(@Request() req) {
    const { id } = req.user
    return this.userService.findOneById(id)
  }

>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
  @Get(':id')
  @ApiOperation({
    summary: '获取用户信息',
    description: '根据用户id获取用户的信息'
  })

  // 先将id 数据转为数字，然后 校验是否正常
  @UsePipes(ParamQueryUserIdTransform, ValidationPipe)
<<<<<<< HEAD
  async getUserInfo(@Param() getInfoParams: GetUserInfoDto) {
=======
  async getUserInfo(@Param() getInfoParams: GetUserInfoParamsDto) {
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7
    return await getInfoParams
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

  @Post()
  @ApiOperation({ summary: '创建用户', description: '设置用户的参数' })
  createUser(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.userService.createUser(createUser)
  }

  @Put(':id')
  @ApiOperation({
    summary: '更新用户',
    description: '更新用户信息'
  })
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUser: UpdateUserDto
  ) {
    return this.userService.updateUser(id, updateUser)
  }

  @Delete(':id')
  @ApiOperation({
    summary: '删除用户',
    description: '根据用户id 删除对应的用户'
  })
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id)
  }
}
