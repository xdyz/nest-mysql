import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

/**
 * 创建用户
 */

export default class CreateUserDto {
  /**
   * 账号
   * @example admin
   */
  @IsNotEmpty({ message: 'name 参数不能为空' })
  @IsString({ message: 'name 必须为字符串类型' })
  username: string

  /**
   * 密码
   * @example 123456
   */
  @IsNotEmpty({ message: 'password 参数不能为空' })
  @IsString({ message: 'password 必须为字符串类型' })
  password: string

  /**
   * 用户名称
   * @example 张豪杰
   */
  @IsNotEmpty({ message: 'nickname参数称不能为空' })
  @IsString({ message: 'nickname 必须为字符串类型' })
  nickname: string

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
  roles?: number | null
}
