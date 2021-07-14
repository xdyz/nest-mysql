// import {
//   ArgumentsHost,
//   Catch,
//   ExceptionFilter,
//   HttpException,
//   HttpStatus,
//   Logger
// } from '@nestjs/common'

// // 统一错误过滤的请求，并根据下面的方式 返回固定的格式

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp()
//     const res = ctx.getResponse()
//     const req = ctx.getRequest()

//     const message = exception.message

//     Logger.log('错误提示', message)

//     const errorResponse = {
//       error: message,
//       code: 1,
//       url: req.originalUrl
//     }

//     const status =
//       exception instanceof HttpException
//         ? exception.getStatus()
//         : HttpStatus.INTERNAL_SERVER_ERROR

//     res.status(status)
//     res.header('Content-Type', 'application/json; charset=utf-8')
//     res.send(errorResponse)
//   }
// }
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response.status(status).json({
      errMessage: exception.message,
      code: 1,
      url: request.url,
      status
    })
  }
}
