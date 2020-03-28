const express = require('express');
const app = express();
const port = 3000;

const userRoute = require('./Routes/user');

const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', userRoute);


app.listen(port, console.log(`Listen port: ${port}`));