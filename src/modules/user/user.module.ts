import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
<<<<<<< HEAD
import { UserEntity } from '../../entities/index'
=======
import { UserEntity } from './user.entity'
>>>>>>> 3e46dabb326ec84f55a921050d515be890fdc3d7

import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
