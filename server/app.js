// server/app.js
const express = require('express');
const path = require('path');

const app = express();

var node_env = process.env.node_env || 'development';

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client

app.get("/test", (req,res)=> {
  res.send("Hello World!!!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;