require('dotenv').config()
const Koa = require('koa')

const app = new Koa()
const router = require('./controllers/index')
const db = require('./db')

// Middlewares
const compress = require('koa-compress')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const passport = require('koa-passport')


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


app.keys = [process.env.sessionSecret] // Secret for koa-session

const CONFIG = {
  key: 'booke:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app))

require('./authStrategies')
app.use(passport.initialize())
app.use(passport.session())

app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen(process.env.PORT)