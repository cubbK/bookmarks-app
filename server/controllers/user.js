const Router = require("koa-router");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = new Router({
  prefix: "/user"
});

router.use(async (ctx, next) => {
  try {
    const headers = ctx.request.headers;
    const jwtString = headers["jwt-string"];
    jwt.verify(jwtString, process.env.JWT_TOKEN_SECRET);
  } catch (err) {
    ctx.throw(400, "Bad jwtString");
  }

  return next();
});

router.post("/addLink", async (ctx, next) => {
  try {
    const userJWTDecoded = jwt.decode(ctx.request.headers["jwt-string"]);
    const userId = userJWTDecoded.userId;

    const link = ctx.request.body.link;

    const updatedUser = await User.addLink(userId, link);

    const lastLink = updatedUser.links[updatedUser.links.length - 1];
    ctx.response.body = {
      _id: lastLink._id,
      url: link,
      info: lastLink.info,
      groupName: lastLink.groupName
    };
  } catch (err) {
    console.log(err);
    ctx.throw(400, err.status);
  }

  return next();
});

module.exports = router;
