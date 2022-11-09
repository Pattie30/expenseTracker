const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const path = require('path')
require('dotenv').config()
const app = express()
const cors = require ('cors')
require('./config/db')
const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

// // API Routes
// app.get('/orders', (req, res) => {

// })

// app.get('/orders/new', (req, res) => {

// })



//Catch All to serve the production app
// app.get('/*', (req, res) => {
//     res.send(path.join(__dirname, 'build', 'index.html'))
// })












app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})