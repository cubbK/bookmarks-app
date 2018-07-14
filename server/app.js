require('dotenv').config()
const Koa = require('koa')

const app = new Koa()
const router = require('./controllers/index')

const mongoose = require('mongoose')
mongoose.connect('mongodb://' + process.env.DB,
  { useNewUrlParser: true }
)

// Middlewares
const compress = require('koa-compress')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')


// error handling
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(logger())
app.use(compress())
app.use(bodyParser())
app.use(router())

app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen(1337)