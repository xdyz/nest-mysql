import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// 引入swagger 模块和 文档构建的方法
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions
} from '@nestjs/swagger'

// 引入 到main.ts 中 设置成全局过滤器
import { HttpExceptionFilter } from './modules/global/filters/http-exception.filter'
// 引入拦截器 拦截要发送的请求，返回返回给前端 统一的个格式
import { TransformInterceptor } from './modules/global/interceptors/transform.interceptor'
// import { NestExpressApplication } from '@nestjs/platform-express'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api/v1') // 设置全局的接口前缀
  // 在入口文件中 开启文档构建 并且设置基本的swagger信息
  const config = new DocumentBuilder()
    .setTitle('xxx 后台管理平台') // swagger 界面名称
    .setDescription('用于api管理 统一前缀 /api/v1') // 描述
    .setVersion('1.0') // 设置版本
    // 请求带上token 设置到header 里 属性为Authorization
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt'
    )
    // .addTag('') // 标签
    .build() // 构建

  // 设置出来的url 不会带controoler 名字 不过这个其实设置不设置都无所谓了
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
  }

  // SwaggerModule 根据设置好的属性 来构架一个swagger 程序
  const document = SwaggerModule.createDocument(app, config, options)
  // 启动这个swagger  'swagger' 为访问地址 localhoset: 3000/swagger 可以自己去设置

  SwaggerModule.setup('swagger', app, document)

  // // 开启静态服务，这样前端就可以直接访问地址上的文件
  // app.useStaticAssets('uploads', {
  //   prefix: '/uploads'
  // })

  // 设置全局 捕获错误的请求格式 过滤捕获到的所有的错误，然后返回统一的错误格式
  app.useGlobalFilters(new HttpExceptionFilter())

  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 从3000端口启动这个应用
  await app.listen(3000)
}
bootstrap()
