import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  /**
   * 账号
   * @example admin
   */
  @IsNotEmpty({ message: '账号不能为空' })
  @IsString({ message: '账号必须为字符串类型' })
  username: string

  /**
   * 密码
   * @example 123456
   */
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须为字符串类型' })
  password: string
}
