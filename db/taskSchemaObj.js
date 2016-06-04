var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema ({
  task :String,
  done :String
});

module.exports = mongoose.model('Task',taskSchema);
