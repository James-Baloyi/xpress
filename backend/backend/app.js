const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/data/:q', (req, res) => {
  var q = req.params.q;
  res.send('looking for ' + q);
});

var port = process.env.PORT || 5000;
server.listen(port);