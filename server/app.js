// server/app.js
const express = require('express');
const path = require('path');

const app = express();

var node_env = process.env.node_env || 'development';

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client

if(node_env !== 'development') {
  app.use(express.static(path.resolve(__dirname, '..', 'public', 'index.html')));
} else {
  app.get("*", (req,res) => {
    res.send("In DEV. Run the App and Server seperately")
  })
}

app.get("/test", (req,res)=> {
  res.send("Hello World!!!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;