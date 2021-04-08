import { Module } from '@nestjs/common'
import { MenuService } from './services/menu.service'
import { MenuEntity } from './entities/menu.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MenuController } from './controllers/menu.controller'
@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
