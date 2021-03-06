const express = require('express')
const app = express()
const config = require('config')
const path = require('path')

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : config.get("port") || '7777'

app.listen(port, '0.0.0.0', (req, res) => {
    console.log(`Server is running on port ${port}`);
})

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'public')))

    app.use('/api/binance', require('./routes/binance.routes'))

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })
}

app.use('/api/binance', require('./routes/binance.routes'))