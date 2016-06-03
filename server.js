var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var PORT = process.env.PORT | 3000;

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended :false
}))

app.get('/',function(req,res){
  res.send("hello world");
})

app.listen(PORT,function(){
  console.log("Application is listening on PORT:",PORT);
})
