import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  @InjectRepository(UserEntity)
  private userRepository: Repository<UserEntity>

  async findOne(name: string): Promise<any> {
    return this.userRepository.findOne({ name })
  }

  async getPageData(queryUsers) {
    console.log(queryUsers)

    return this.userRepository.find({ order: { updated_at: 'DESC' } })
  }
}
