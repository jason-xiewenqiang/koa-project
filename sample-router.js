const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const app = new Koa()
const route = require('./middleware/Router')
const router = new route()
const bodyParser = require('koa-bodyparser')

router.get('/404', async (context, next) => {
    context.body = 'Page found'
    context.status = 404
})

router.get('/', async (context, next) => {
    context.type = 'html'
    context.body = fs.readFileSync(path.join(__dirname, 'index.html'))
})

router.post('/login', async (context, next) => {
    let postData = context.request.body
    console.log(postData)
    context.body = postData
})


app.use(bodyParser()).use(router.routes())
app.listen(4000)