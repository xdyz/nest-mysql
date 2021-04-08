import { IsInt, IsNotEmpty } from 'class-validator'

export default class DeleteUserDto {
  /**
   * id
   * @example 2
   */
  @IsNotEmpty({ message: 'id 不可以为空' })
  @IsInt({ message: 'id 必须是数字类型' })
  id: number
}
