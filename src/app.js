const express = require('express')
const bodyParser = require('body-parser')

//routers
const libRouter = require('./routes/lib-router');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/lib', libRouter);

app.get('/', (req, res) => {
    res.status(200).send({message: 'Lib Sysmap'})
})

module.exports = app;