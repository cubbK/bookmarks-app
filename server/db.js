const mongoose = require('mongoose')
mongoose.connect('mongodb://' + process.env.DB,
  { useNewUrlParser: true }
).then (
  () => {
     /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
     console.log('Succesfully connected to mongodb') 
    },
  err => { 
    /** handle initial connection error */
    console.error('Error connecting to mongodb: ' + err)
  }
)

module.exports =  mongoose