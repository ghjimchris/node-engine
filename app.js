// const https = require('https');


// const server = https.createServer((req, res) => {
    
// });

// server.listen(3000)
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('middleware');
})

app.use((req, res, next) => {
    console.log('another midware');
})

app.listen(3000)