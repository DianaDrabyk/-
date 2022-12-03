const { Client } = require('node-osc');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 5000;
const helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

//pre-flight requests
app.options('*', function (req, res) {
    res.send(200);
});

app.get('/', function (req, res) {
    res.status(200);
    res.json({ working: true });
    res.end();
});

app.get('/test/', function (req, res) {

    const client = new Client('127.0.0.1', 8888);
    client.send('/vvvv', req.query.id, () => {
        client.close();
    });

    res.status(200);
    res.json({ working: true });
    res.end();
});

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
    console.log('Node Endpoints working :)');
});

module.exports = server;