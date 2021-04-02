import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../../entities/index'

@Injectable()
export class UserService {
  // 引入实体 如果需要操控数据库  不建议直接使用实体，根据实体生成Repository  来操控是比较快的
  @InjectRepository(UserEntity)
  private userRepository: Repository<UserEntity>

  // 用户登录后 根据用户名 查询到用户的信息 然后判断密码是否相同  相同就生成token
  async findOne(username: string): Promise<any> {
    return this.userRepository.findOne({ username })
  }

  // 在删除 或者更新之前 根据id 来查找是否存在此用户
  async findOneById(id: number) {
    const res = await this.userRepository.findOne(id)
    if (!res)
      throw new HttpException('未查找到该用户！', HttpStatus.BAD_REQUEST)
    return res
  }

  async getPageData(queryUsers) {
    try {
      const { page, size, ...rest } = queryUsers

      const list = await this.userRepository.find({
        ...rest,
        order: { updated_at: 'DESC' },
        skip: page - 1 > 0 ? page - 1 : 0,
        take: size
      })

      // 返回数量
      const count = await this.userRepository.count({ ...rest })
      return {
        list,
        total: count
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.OK)
    }
  }

  // 新增用户
  async createUser(createUser) {
    try {
      const res = await this.findOne(createUser.username)
      if (res?.id) throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST)
      return await this.userRepository.save(createUser)
    } catch (error) {
      throw new HttpException(error, HttpStatus.OK)
    }
  }

  // 更新用户信息
  async updateUser(id: number, updateUser) {
    try {
      await this.findOneById(id)
      return await this.userRepository.save({ id, ...updateUser })
    } catch (error) {
      throw new HttpException(error, HttpStatus.OK)
    }
  }

  // 删除用户
  async deleteUser(id: number) {
    try {
      // 删除用户之前 先查询用户是否存在
      const res = await this.findOneById(id)
      await this.userRepository.remove(res)
      return
    } catch (error) {
      throw new HttpException(error, HttpStatus.OK)
    }
  }
}
