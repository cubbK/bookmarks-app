const combineRouters = require('koa-combine-routers')

const combinedRouter = combineRouters(
  require('./googleUser')
)

module.exports = combinedRouter