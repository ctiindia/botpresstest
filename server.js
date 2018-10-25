// var http = require('http');

// http.createServer(function (req, res) {
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, world!');
    
// }).listen(process.env.PORT || 8080);


const { Botpress } = require('botpress')

const bot = new Botpress({ botfile: require('./botfile.js') })
bot.start()

module.exports = require('./src/index')



