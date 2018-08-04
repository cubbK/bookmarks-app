const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const userSchema = new mongoose.Schema({
  googleId: String,
  googleRefreshToken: String,
  links: [mongoose.Schema.Types.ObjectId]
});
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
exports.User = User;

exports.add = () => {
  const user1 = new User({ email: "email1" });
  user1.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
};

exports.getAll = async () => {
  const users = await User.find({});
  console.log(users);
  return users;
};

exports.setUserField = (googleId, field, value) => {
  User.update({ googleId }, { [field]: value });
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
