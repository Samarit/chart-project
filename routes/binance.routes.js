const { Router } = require('express')
const router = Router()
const Binance = require('node-binance-api')
const binance = new Binance()

// Route for transfer Binance data of a specific symbol
router.get('/tickerData', (req, res) => {
    try {
        
        const symbol = req.header('symbol').toUpperCase()
        binance.prevDay(symbol, (error, prevDay) => {
            res.send(prevDay)
        })

    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting tickerData! ${e}`})
    }
})

// Route for transfer Binance data of candlesticks for specific symbol
router.get('/candlesticks', async (req, res) => {
    try {

        const symbol = req.header('symbol')
        const timeframe = req.header('timeframe')
        const limit = +req.header('limit')

        binance.candlesticks(symbol, timeframe, (error, ticks) => {
            console.log(`${symbol} ${timeframe} ${limit} data recieved`);
            res.send(ticks)
        }, {limit: limit})

    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting candlestickes data! ${e}`})
    }
})


module.exports = router