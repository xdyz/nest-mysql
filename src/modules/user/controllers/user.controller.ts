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
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Request
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger'
import { UserService } from '../services/user.service'
import {
  CreateUserDto,
  GetUsersDto,
  GetUserInfoDto,
  UpdateUserDto,
  UploadUserAvatarDto
} from '../dtos/index'
import {
  GetUsersListQueryTransform,
  ParamQueryUserIdTransform
} from '../pipes/index.pipe'
import { FileInterceptor } from '@nestjs/platform-express'

@ApiTags('用户管理') // 设置swagger 分类 用于区分是哪个类别的接口 或者是界面 功能等
@Controller('users')
// 身份验证守卫 判断是否有token 如果没有或者token 失效  就返回401 如果正常 就解析token 返回token中的参数给 jwt.strategy.ts 中的validate 方法
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt') // 这里jwt名字与main.ts addBearerAuth 第二个名字要一致
export class UserController {
  @Inject()
  private readonly userService: UserService

  @Get(':id')
  @ApiOperation({
    summary: '获取用户信息',
    description: '根据用户id获取用户的信息'
  })

  // 先将id 数据转为数字，然后 校验是否正常
  @UsePipes(ParamQueryUserIdTransform, ValidationPipe)
  async getUserInfo(@Param() getInfoParams: GetUserInfoDto) {
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

  // // 上传

  @Post('upload')
  @ApiOperation({
    summary: '上传头像',
    description: '上传有用户头像'
  })
  @ApiConsumes('multipart/form-data') // 设置上传数据类型
  @ApiBody({
    type: UploadUserAvatarDto,
    description: '文件上传'
  })
  @UseInterceptors(FileInterceptor('file'))
  upload(@Request() req, @UploadedFile() file) {
    const { id } = req.user
    const { url: avatar } = file
    return this.userService.updateUser(id, { avatar })
  }
}
