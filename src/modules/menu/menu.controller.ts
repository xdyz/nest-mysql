import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { MenuService } from './menu.service'
import { CreateMenuDto } from '../../dtos/menu/index'
@Controller('menus')
@ApiTags('菜单管理')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt') // 这里jwt名字与main.ts addBearerAuth 第二个名字要一致
export class MenuController {
  @Inject()
  private readonly menuService: MenuService
  @Get()
  @ApiOperation({
    summary: '全部菜单',
    description: '获取全部的菜单数据'
  })
  getMenus() {
    return this.menuService.getMenus()
  }

  @Post()
  createMenu(@Body() createMenuBody: CreateMenuDto) {
    return this.menuService.createMenu(createMenuBody)
  }
}
