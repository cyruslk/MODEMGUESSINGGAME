const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const { spawn } = require('child_process');

app.use(express.static(__dirname + '/build'));
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/emitter', function (req, res) {
  var baudRate = req.body.baudRate;
  var child = spawn("minimodem", ["-t", `${baudRate}`]);
  console.log(req.body);
  var value = req.body.value;
  child.stdin.write(value);
});

app.post('/receiver', function (req, res) {
  console.log(req.body);
});


app.listen(port, () => {
  console.log('listening on port ' + port)
});
