import { Injectable, BadRequestException } from '@nestjs/common'

@Injectable()
export class GetUserQueryTransform {
  transform(value: { page: string; size: string }): Record<string, number> {
    const { page, size, ...rest } = value
    const p = parseInt(page, 10)
    const s = parseInt(size, 10)
    if (isNaN(p) || isNaN(s)) {
      throw new BadRequestException('Validation failed')
    }
    return {
      page: p,
      size: s,
      ...rest
    }
  }
}
