/**
 * 权限鉴定  还需要进行练习
 */
const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const route = require('./middleware/Router')
const admin = require('./middleware/admin')
const {sign} = require('jsonwebtoken')
const secret = 'jason'
const jwt = require('koa-jwt')({sign})
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new route()

router.get('/', async (context, next) => {
    context.type = 'html'
    context.body = fs.readFileSync(path.join(__dirname, 'index.html'))
})

router.post('/api/login', async (ctx, next) => {
    const user = ctx.request.body
    if (user && user.username) {
        let {username} = user
        const token = sign({username}, secret, {expiresIn: '1h'})
        ctx.body = {
            message: 'Get token success',
            code: 1,
            token
        }
    } else {
        ctx.body = {
            message: 'Param Error',
            code: -1
        }
    }
})

router.get('/api/userInfo', jwt, async ctx => {
    ctx.body = {
        username: ctx.state.user.username
    }
})

router.get('/api/adminInfo', jwt, admin, async ctx => {
    ctx.body = {username: ctx.state.user.username}
})

app.use(bodyParser()).use(router.routes())
app.listen(4343)

