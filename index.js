const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<p>This is some HTML page</p>');
});

app.listen(3000, () => {
    console.log('My server is running');
});