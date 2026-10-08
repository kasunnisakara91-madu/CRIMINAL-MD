const {
    downloadMediaMessage,
    generateWAMessageFromContent,
    proto
} = require('@itsliaaa/baileys');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const __path = process.cwd();
const PORT = process.env.PORT || 5000;

let code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

// Body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Pairing code
app.use('/code', code);

// Pair page
app.get('/pair', (req, res) => {
    res.sendFile(__path + '/pair.html');
});

// Settings page
app.get('/setting', (req, res) => {
    res.sendFile(__path + '/setting.html');
});

// Main page
app.get('/', (req, res) => {
    res.sendFile(__path + '/main.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star ‼️

Server running on http://localhost:${PORT}
`);
});

module.exports = app;
