const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('<h1>BEAM dep test</h1>');
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})