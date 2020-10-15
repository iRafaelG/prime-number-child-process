// import node modules
const express = require('express');
const { fork } = require('child_process');

// initializations
const app = express();

// routers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/prime', (req, res) => {
    const childProcess = fork('./src/prime.module.js');
    childProcess.send({ "numero": parseInt(req.query.numero) });
    childProcess.on("message", response => res.send(response));
});

// starting
app.listen(3001, () => {
    console.log('Server on port 3001');
});