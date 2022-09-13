require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routers/index')
const port = 5000;
require('./config/db')

app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:false, limit:'20mb'}))

app.use('/api', router);


app.listen(port, ()=>{
    console.log(`Port is listeing to ${port}`)
})
