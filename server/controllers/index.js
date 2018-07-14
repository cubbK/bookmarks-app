const combineRouters = require('koa-combine-routers')

const combinedRouter = combineRouters(
  require('./user')
)

module.exports = combinedRouter