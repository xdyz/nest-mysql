import { IsInt, IsNotEmpty } from 'class-validator'
/**
 * 获取用户列表
 */
export default class GetUsersDto {
  /**
   * 页数
   * @example 1
   */
  @IsNotEmpty({ message: 'page 不能为空' })
  @IsInt({ message: 'page 必须为数字类型' })
  page?: number
  /**
   * 数量
   * @example 10
   */
  @IsNotEmpty({ message: 'size 不能为空' })
  @IsInt({ message: 'size 必须为数字类型' })
  size: number
}
