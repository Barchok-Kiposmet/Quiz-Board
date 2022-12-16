const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send('<p>This is some HTML page</p>');
});

app.listen(port, () => {
    console.log('My server is running');
});