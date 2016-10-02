var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

// View Engine
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

// Dir Setting
app.use(express.static(path.join(__dirname, 'client')));

// router
app.use('/',index);

app.listen(3000,function(){
  console.log("Server Started on Port 3000");
});

