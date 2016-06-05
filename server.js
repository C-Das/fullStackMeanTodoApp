var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var Task = require('./db/taskSchemaObj.js');

mongoose.connect('mongodb://localhost/mytodolist');

var PORT = process.env.PORT | 3000;

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended :false
}))

app.get('/',function(req,res){
  res.send(index.html);
});

app.post('/app/addTodo',function(req,res){
  var task = new Task ({
    task:req.body.task,
    done:false
  });
  task.save().then(function(dbtodo){
    res.json(dbtodo);
  });
});

app.get('/app/getTodo',function(req,res){
  Task.find({}).exec().then(function(response){
    res.json(response);
  });
});

app.put('/app/deleteTodo',function(req,res){
  Task.remove({_id:req.body.id}).then(function(response){
    res.json(response);
  });
});

app.put('/app/updateTodo',function(req,res){
  Task.update({_id:req.body.task._id},{$set : {done:req.body.task.done}}).then(function(response){
    res.json(response);
  });
});

app.listen(PORT,function(){
  console.log("Application is listening on PORT:",PORT);
})
