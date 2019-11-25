const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
    ctx.response.body = {
        url: ctx.request.url,
        query: ctx.request.query,
        queryString: ctx.request.querystring
    }
})

app.listen(3000)