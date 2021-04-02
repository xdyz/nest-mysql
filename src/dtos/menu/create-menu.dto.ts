import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export default class CreateMenuDto {
  /**
   * @example 菜单管理
   */
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @IsString({ message: '菜单名称必须为字符串类型' })
  name: string

  /**
   * @example /system/menu
   */
  @IsNotEmpty({ message: '菜单路径不能为空' })
  @IsString({ message: '菜单路径必须为字符串类型' })
  path: string

  @IsNumber()
  parentId: number

  /**
   * @example icon-menu
   */
  @IsString({ message: '图标必须为字符串类型' })
  icon: string | null

  /**
   * @example false
   */
  @IsBoolean({ message: '是否隐藏字段 必须为布尔类型' })
  hideInMenu: boolean
}
