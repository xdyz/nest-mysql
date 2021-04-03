import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { MenuService } from './menu.service'
import { CreateMenuDto, UpdateMenuDto } from '../../dtos/menu/index'
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
  @ApiOperation({
    summary: '新增菜单',
    description: '填写对应的表单后，创建菜单，路径必须是唯一的'
  })
  @UsePipes(ValidationPipe)
  createMenu(@Body() createMenuBody: CreateMenuDto) {
    return this.menuService.createMenu(createMenuBody)
  }

  @Put(':id')
  @ApiOperation({
    summary: '更新菜单',
    description:
      '根据id，先查出是否有该菜单，然后在进行更新操作，返回更新后的值'
  })
  @UsePipes(ParseIntPipe, ValidationPipe)
  updateMent(@Param('id') id: number, updateMenuBody: UpdateMenuDto) {
    this.menuService.updateMenu(id, updateMenuBody)
  }

  @Delete(':id')
  @ApiOperation({
    summary: '删除菜单',
    description: '先根据id查询出该菜单，然后执行删除操作'
  })
  @UsePipes(ParseIntPipe, ValidationPipe)
  deleteMenu(@Param('id') id: number) {
    return this.menuService.deleteMenu(id)
  }
}
