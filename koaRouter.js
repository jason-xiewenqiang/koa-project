const fs = require('fs')
const koa = require('koa')
const path = require('path')
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new koa()
const router = new koaRouter()

router.get('/', async (context, next) => {
    context.type = 'html'
    context.body = fs.readFileSync(path.join(__dirname, 'index.html'))
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