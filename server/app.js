const { Client } = require('node-osc');
const cors = require('cors');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

app.use(
    cors({
        origin: '*'
    })
)

//pre-flight requests
app.options('*', function (req, res) {
    res.send(200);
});

app.get('/', function (req, res) {
    res.status(200);
    res.json({ working: true });
    res.end();
});

app.post('/color1/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question1', request.body.color, () => {
        client.close();
    });

    console.log('POST color1');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color2/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question2', request.body.color, () => {
        client.close();
    });

    console.log('POST color2');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color3/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question3', request.body.color, () => {
        client.close();
    });

    console.log('POST color3');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color4/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question4', request.body.color, () => {
        client.close();
    });

    console.log('POST color4');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color5/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question5', request.body.color, () => {
        client.close();
    });

    console.log('POST color5');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color6/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question6', request.body.color, () => {
        client.close();
    });

    console.log('POST color6');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color7/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question7', request.body.color, () => {
        client.close();
    });

    console.log('POST color7');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

  app.post('/color8/', function(request, response) {
    const client = new Client('127.0.0.1', 8888);
    client.send('/question8', request.body.color, () => {
        client.close();
    });

    console.log('POST color8');
    console.dir();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');
  })

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    /* eslint-disable no-console */
    console.log('Node Endpoints working :)');
});

module.exports = server;