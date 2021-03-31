import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity() // 实例装饰器 说明这个类是一个 实例类
export class UserEntity {
  // 主键 装饰器 说明这个id 属性 是这个表的主键  这个是必须有的  每一个表必须有有一个主键 @PrimaryColumn()

  //  @PrimaryGeneratedColumn() 不仅说明  id 是主键  还是说明 id 是自动生成的
  @PrimaryGeneratedColumn()
  id: number

  /**
   *  ts 的类型会被对应的到数据的类型上去
   *  number  ---->  integer
   *  string  ---->  varchar
   *  boolean ---->  bool
   *
   *  我们还可以 在
   *  @Column({
   *    length: number  长度  字段对应的长度
   *    default: xxx  默认值
   *  })
   */

  @Column() // 数据库 表列  也是说明数据库的字段  还支持设置当前字段的一些属性  类型， 长度 等等
  name: string // 名称

  @Column()
  password: string // 密码

  @Column()
  real_name: string // 真实名称

  @Column()
  email: string // 邮箱

  @Column()
  roles: number // 角色

  // 创建时间 这个会自动生成
  @CreateDateColumn()
  created_at: string

  // 更新时间 这个会自动进行更新
  @UpdateDateColumn()
  updated_at: string
}
