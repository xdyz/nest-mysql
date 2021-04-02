import { Module } from '@nestjs/common'
import { MenuService } from './menu.service'
import { MenuEntity } from '../../entities/index'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MenuController } from './menu.controller'
@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
