var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var URI = 'mongodb://heroku_znv3t5rs:@ds259325.mlab.com:59325/heroku_znv3t5rs'
mongoose.connect(URI || "mongodb://localhost:27017/TodoApp");
module.exports = mongoose;