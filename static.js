const fs = require('fs')
const koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new koa()
const router = new koaRouter()

app.use(views(__dirname + '/views'))
app.use(static(path.join(__dirname, 'static')))

router.get('/', async (context, next) => {
    await context.render('index')
})

router.post('/login', async (context, next) => {
    let postData = context.request.body
    console.log(postData)
    context.body = postData
})

app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8787, () => {
    console.log('Server is running at http://localhost:8787')
})