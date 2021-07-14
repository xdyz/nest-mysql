import { Module } from '@nestjs/common'
import { UserController } from './controllers/user.controller'
import { UserService } from './services/user.service'
import { UserEntity } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MulterModule } from '@nestjs/platform-express'
import { MulterConfigService } from 'src/modules/global/services/file-upload.service'
@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService
    }),
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
