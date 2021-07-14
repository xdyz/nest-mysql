import { Injectable } from '@nestjs/common'
import {
  MulterModuleOptions,
  MulterOptionsFactory
} from '@nestjs/platform-express'
import * as aliOssStorage from 'multer-ali-oss'
@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: aliOssStorage({
        config: {
          region: '',
          accessKeyId: '',
          accessKeySecret: '',
          bucket: ''
        },
        filename: (req, file, cb) => {
          return cb(null, `${+new Date()}_${file.originalname}`)
        }
      })
    }
  }
}
