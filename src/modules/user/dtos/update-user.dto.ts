import { IsInt, IsNotEmpty } from 'class-validator'
import CreateUserDto from './create-user.dto'

export default class UpdateUserDto extends CreateUserDto {
  /**
   * id
   * @example 2
   */
  @IsNotEmpty({ message: 'id 不可以为空' })
  @IsInt({ message: 'id 必须是数字类型' })
  id: number
}
