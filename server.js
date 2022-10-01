const { json } = require('body-parser');
const express= require('express');
const app= express();
const dbConnection= require('./config/database')

app.use(json());
dbConnection();

app.use('/',require('./routes/index'));

app.listen(3003,console.log('Server is running'));