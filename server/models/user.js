const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");
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
    required: true
  },
  googleRefreshToken: {
    type: String,
    required: true
  },
  links: [linkSchema]
});
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
exports.User = User;

exports.setUserField = (googleId, field, value) => {
  const fieldsToUpdate = { [field]: value };
  return User.update({ googleId }, fieldsToUpdate, function(err, raw) {
    if (err) return err;
  }).exec();
};

// Every google account has a unique id which is sub field in decoded token
exports.findOrCreateByGoogleId = googleId => {
  return new Promise((resolve, reject) => {
    User.findOrCreate(
      { googleId: googleId },
      {
        googleId: googleId,
        googleAccessToken: null,
        links: []
      },
      (err, result) => {
        // my new or existing model is loaded as result
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

exports.getUserByAccessToken = async userId => {
  const user = await User.findOne({ _id: userId }).exec();
  const refreshToken = user.googleRefreshToken;

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

    return {
      links: userByGoogleId.links
    };
  } catch (err) {
    console.log(err.message);
    return err;
  }

  console.log(123);

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
