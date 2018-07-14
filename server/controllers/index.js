const combineRouters = require('koa-combine-routers')

const combinedRouter = combineRouters(
  require('./user'),
  require('./auth')
)

module.exports = combinedRouter