const Koa = require('koa')
const app = new Koa()

app.use(async (context, next) => {
    let start = new Date().getTime()
    await next()
    let end = new Date().getTime()
    context.response.type = 'text/html'
    context.response.body = `<h1>Hello world</h1>`
    console.log(`请求地址${context.path}, 响应时间：${end - start}ms`)
})

app.use(async (ctx, next) => {
    console.log('中间件 start')
    next()
    console.log('中间件 end')
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})