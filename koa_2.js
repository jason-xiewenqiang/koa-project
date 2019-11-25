const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
    let postData = ''
    ctx.req.on('data', (data) => {
        postData+=data
    })
    ctx.req.on('end', () => {
        console.log(postData)
    })
})

app.listen(3000)