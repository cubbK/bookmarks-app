const mongoose = require('mongoose')
const findOrCreate = require('mongoose-find-or-create')

const userSchema = new mongoose.Schema({
  email: String,
  googleId: String,
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

exports.findOrCreate = ({ userId, userEmail }) => {
  return new Promise ((resolve, reject) => {
    User.findOrCreate({ googleId: userId }
      , {
        googleId: userId,
        email: userEmail,
        links: []
      }, (err, result) => {
      // my new or existing model is loaded as result
      if (err) { reject(err) } 
      resolve(result)
    })
  })
}