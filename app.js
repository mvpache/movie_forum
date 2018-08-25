const express = require('express');
const path = require ('path');

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`App is running ${port}`);