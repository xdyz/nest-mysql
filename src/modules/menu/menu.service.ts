import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MenuEntity } from '../../entities/index'
@Injectable()
export class MenuService {
  @InjectRepository(MenuEntity)
  private menuRepository: Repository<MenuEntity>

  async getMenus() {
    return this.menuRepository.find()
  }
}
