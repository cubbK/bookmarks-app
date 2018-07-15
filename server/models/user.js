const mongoose = require('mongoose')
const findOrCreate = require('mongoose-find-or-create')

const userSchema = new mongoose.Schema({
  email: String,
  googleToken: String,
  links: [mongoose.Schema.Types.ObjectId]
})
userSchema.plugin(findOrCreate)

const User = mongoose.model('User', userSchema)
exports.User = User


exports.add = () => {
  const user1 = new User({ email: 'email1' });
  user1.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });
}

exports.getAll = async () => {
  const users = await User.find({})
  console.log(users)
  return users
}