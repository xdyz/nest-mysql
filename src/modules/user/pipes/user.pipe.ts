import { Injectable } from '@nestjs/common'

@Injectable()
export class GetUsersListQueryTransform {
  transform(value: { page: string; size: string }): Record<string, number> {
    const { page, size, ...rest } = value
    return {
      page: parseInt(page, 10),
      size: parseInt(size, 10),
      ...rest
    }
  }
}

@Injectable()
export class GetUserInfoQueryTransform {
  transform(value: { id: string }): Record<string, number> {
    const { id, ...rest } = value
    return {
      id: parseInt(id, 10),
      ...rest
    }
  }
}
