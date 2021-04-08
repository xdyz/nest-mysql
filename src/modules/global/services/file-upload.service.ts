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
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI5t9qF5JXkmsXQt7fDof1',
          accessKeySecret: 'f9ck7V8IMSDA6YEfSkz70CFN2AndNg',
          bucket: 'xdyz'
        },
        filename: (req, file, cb) => {
          return cb(null, `${+new Date()}_${file.originalname}`)
        }
      })
    }
  }
}
