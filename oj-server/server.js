const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const editorSocketService = require('./services/editorSocketService')(io);

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index')
//connect mongoDb database
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds127936.mlab.com:27936/test1');// my mongoDB is fucked for some reason so I used Payson's instead
//mongoose.connect('mongodb://user:user@ds161162.mlab.com:61162/cs503'); //hide username password?



//app.get('/', (req, res) => res.send('Hello World!'));


app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/')});
});

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
    console.log('App listening on port 3000!')
}