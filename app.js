const express = require('express')
const app = express()
const config = require('config')


const port = config.get("port")

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

app.use('/api/binance', require('./routes/binance.routes'))
