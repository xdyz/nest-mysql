import { IsInt, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator'

/**
 * 获取用户列表
 */
export class GetUsersDto {
  /**
   * 页数
   * @example 1
   */
  @IsNotEmpty({ message: 'page 不能为空' })
  @IsInt({ message: 'page 必须为数字类型' })
  page: number
  /**
   * 数量
   * @example 10
   */
  @IsNotEmpty({ message: 'size 不能为空' })
  @IsInt({ message: 'size 必须为数字类型' })
  size: number
}

/**
 * 创建用户
 */

export class CreateUserDto {
  /**
   * 账号
   * @example admin
   */
  @IsNotEmpty({ message: 'name 参数不能为空' })
  @IsString({ message: 'name 必须为字符串类型' })
  name: string

  /**
   * 密码
   * @example 123456
   */
  @IsNotEmpty({ message: 'password 参数不能为空' })
  @IsString({ message: 'password 必须为字符串类型' })
  @Max(8, { message: '密码长度最长为8位数' })
  password: string

  /**
   * 用户名称
   * @example 张豪杰
   */
  @IsNotEmpty({ message: 'real_name参数称不能为空' })
  @IsString({ message: 'real_name 必须为字符串类型' })
  real_name: string

  /**
   * 邮箱
   * @example zhanghaojie@xmfunny.com
   */
  @IsNotEmpty({ message: 'email 参数不能为空' })
  @IsString({ message: 'email 必须为字符串类型' })
  email: string
  /**
   * 角色
   * @example 0
   */
  @IsNumber()
  role?: number
}

/**
 * 根据id 获取用户信息
 */

export class GetUserInfoDto {
  /**
   * id
   * @example 123
   */
  id: number
}
