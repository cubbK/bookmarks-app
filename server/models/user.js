const mongoose = require("mongoose");
const { oauth2Client } = require("../googleClient");

const infoSchema = new mongoose.Schema({
  title: String,
  iconHref: String,
  err: String
});

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  groupName: String,
  info: infoSchema
});

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  googleRefreshToken: {
    type: String,
  },
  links: [linkSchema]
});

const User = mongoose.model("User", userSchema);
exports.User = User;

exports.setUserField = (googleId, field, value) => {
  const fieldsToUpdate = { [field]: value };
  return User.updateOne({ googleId }, fieldsToUpdate, function(err, raw) {
    if (err) return err;
  }).exec();
};

// Every google account has a unique id which is sub field in decoded token
exports.findOrCreateByGoogleId = async googleId => {
  const user = await User.findOne({ googleId }).exec();

  if (user === null) {
    const newUser = await new User({
      googleId: googleId,
      googleRefreshToken: "",
      links: []
    }).save();

    console.log("newUser", newUser);
    return newUser;
  }

  return user;
};

exports.getUserByAccessToken = async userId => {
  const user = await User.findOne({ _id: userId }).exec();
  const refreshToken = user.googleRefreshToken;
  console.log("first user");
  console.log(user);

  // Required shape for google auth client
  const tokens = {
    refresh_token: refreshToken
  };
  oauth2Client.setCredentials(tokens);
  await oauth2Client.refreshAccessToken();

  const newToken = oauth2Client.credentials.access_token;
  try {
    const tokenInfo = await oauth2Client.getTokenInfo(newToken);
    const googleId = tokenInfo.sub;

    const userByGoogleId = await User.findOne({ googleId }).exec();
    console.log("user");
    console.log(userByGoogleId);
    return {
      links: userByGoogleId.links
    };
  } catch (err) {
    console.log(err.message);
    return err;
  }

  // const tokenInfo = await oAuth2client.getTokenInfo('my-access-token');
};

const getPageInfo = require("../helpers/getPageinfo");
const getGroupNameFromLink = require("../helpers/getGroupNameFromLink");

exports.addLink = async (userId, link) => {
  const info = await getPageInfo(link);
  const groupName = getGroupNameFromLink(link);

  return User.findOneAndUpdate(
    { _id: userId },
    {
      $push: { links: { url: link, info, groupName } }
    },
    { new: true }
  ).exec();
};
