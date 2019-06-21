const express = require('express');
const SECRETS = require('./secret');

const app = express();

//Set static directory to /public
app.use(express.static(__dirname + '/public'));

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});
