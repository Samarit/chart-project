const { Router } = require('express')
const router = Router()
const Binance = require('node-binance-api')
const binance = new Binance()

router.get('/tickerData', async (req, res) => {
    try {
        const ticker = await binance.prices()
        console.log('tickerData fetched');
        res.send(ticker)
    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting tickerData! ${e}`})
    }
})

router.get('/tickerData/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol
        const ticker = await binance.prices(symbol, (error, ticker) => {
            console.log(`${symbol} price: ${ticker[symbol]}`)
            res.send(ticker)
        })
        
    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting tickerData! ${e}`})
    }
})

router.get('/candlesticks/:symbol/:interval', async (req, res) => {
    try {
        const symbol = req.params.symbol
        const interval = req.params.interval
        const candlesticks = await binance.candlesticks(symbol, interval, (error, ticks) => {
            console.log(`${symbol} ${interval} data recieved`);
            res.send(ticks)
        })
    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting candlestickes data! ${e}`})
    }
})


module.exports = router