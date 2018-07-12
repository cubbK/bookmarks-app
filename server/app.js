require('dotenv').config()
const Koa = require('koa');

const app = new Koa();
const db = require('monk')(process.env.DB)

// Middlewares
const compress = require('koa-compress');
var logger = require('koa-logger');

app.use(logger())
app.use(compress())

app.use(async ctx => {
  const users = db.get('users')
  const usersCount = await users.count()
  console.log(usersCount)
  ctx.body = 'Hello World';
});

app.listen(1337);