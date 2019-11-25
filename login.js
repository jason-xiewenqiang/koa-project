const koa = require('koa')
const path = require('path')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')

const app = new koa()

app.use(bodyParser())

app.use(async (context) => {
    if (context.url === '/' && context.method === 'GET') {
        context.type = 'html'
        context.body = fs.readFileSync(path.join(__dirname, 'index.html'))
    } else if (context.url === '/login' && context.method === 'POST') {
        let postData = context.request.body
        console.log(postData)
        context.body = postData
    }
})



app.listen(8888, () => {
    console.log('Server is running at http://localhost:8888')
})