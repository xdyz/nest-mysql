import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  icon: string | null

  @Column({
    default: 0
  })
  parentId: number

  @Column()
  path: string

  @Column()
  hideInMenu: boolean
}
