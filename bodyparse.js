const koa = require('koa')
const app = new koa()
app.use(async (ctx) => {
    if (ctx.request.method === 'POST') {
        
    } else if (ctx.request.method === 'GET') {
        if (ctx.request.path === '/') {
            ctx.response.type = 'html'
            ctx.response.body = '<a href="/">Go To Index</a>'
        }
    } else {
        ctx.response.body = 'Hello world'
    }
    console.log(ctx.request)
    console.log(ctx.response)
})
app.listen(3000)