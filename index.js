const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send('index');
});

app.listen(port, () => {
    console.log('My server is running');
});