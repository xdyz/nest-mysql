import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MenuEntity } from '../../entities/index'
@Injectable()
export class MenuService {
  @InjectRepository(MenuEntity)
  private menuRepository: Repository<MenuEntity>

  async findOneMenuByPath(path: string) {
    const res = await this.menuRepository.findOne({ path })
    if (res?.id) throw new HttpException('已存在相同的菜单路径', HttpStatus.OK)
    return res
  }

  async getMenus() {
    return await this.menuRepository.find()
  }

  async createMenu(createMenuBody) {
    const { path } = createMenuBody
    await this.findOneMenuByPath(path)
    return await this.menuRepository.save(createMenuBody)
  }
}
