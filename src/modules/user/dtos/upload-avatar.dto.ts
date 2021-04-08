import { ApiProperty } from '@nestjs/swagger'

export default class UploadUserAvatarDto {
  @ApiProperty({
    type: 'string',
    format: 'binary'
  })
  file: Express.Multer.File
}
