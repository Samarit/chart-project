const express = require('express')
const app = express()
const config = require('config')
const path = require('path')

const port = '7777'

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use('/api/binance', require('./routes/binance.routes'))