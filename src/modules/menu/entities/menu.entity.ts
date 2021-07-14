import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({
    default: null
  })
  icon?: string | null

  @Column({
    default: 0
  })
  parentId: number

  @Column()
  path: string

  @Column()
  hideInMenu: boolean
}
