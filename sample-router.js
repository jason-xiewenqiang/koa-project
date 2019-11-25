const Koa = require('koa')
const app = new Koa()
const route = require('./middleware/Router')
const router = new route()

router.get('/404', async (context, next) => {
    context.body = 'Page found'
    context.status = 404
})

app.use(router.routes())
app.listen(4000)