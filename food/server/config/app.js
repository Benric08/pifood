const express = require('express');
const app = express();
const test = require('../routes/test');

app.use(express.json());
app.use(test);



module.exports=app;