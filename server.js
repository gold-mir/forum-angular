const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const app = express();

//parse incoming json into json objects
app.use(bodyParser.json());

//point express to our dist folder
app.use(express.static(path.join(__dirname, 'dist/forum')));

//point requests to /api to our api code
app.use('/api', api);

//send all other requests to angular router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/forum/index.html'));
});

//create a server
const server = http.createServer(app);

//tell the server to start on port 3000
server.listen(3000, () => {
    console.log("Started server");
});