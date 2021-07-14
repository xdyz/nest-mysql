import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MenuEntity } from '../entities/menu.entity'
@Injectable()
export class MenuService {
  @InjectRepository(MenuEntity)
  private menuRepository: Repository<MenuEntity>

  // 根据路径查询 是否存在相同的路径，如果存在了就不可以进行添加
  async findOneMenuByPath(path: string) {
    const res = await this.menuRepository.findOne({ path })
    if (res?.id) throw new HttpException('已存在相同的菜单路径', HttpStatus.OK)
    return res
  }

  // 根据id 查询 菜单存在还是不存在如果存在就继续，不存在就返回错误
  async findOneMenuById(id: number) {
    const res = await this.menuRepository.findOne({ id })
    if (!res) throw new HttpException('未找到对应菜单', HttpStatus.OK)
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

  // 更新
  async updateMenu(id: number, updateMenuBody) {
    const res = await this.findOneMenuById(id)
    Object.assign(res, { id, ...updateMenuBody })
    return await this.menuRepository.save(res)
  }

  async deleteMenu(id: number) {
    const res = await this.findOneMenuById(id)
    return await this.menuRepository.delete(res)
  }
}
