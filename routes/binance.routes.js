const { Router } = require('express')
const router = Router()
const Binance = require('node-binance-api')
const binance = new Binance()


router.get('/tickerData/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol.toUpperCase()
        binance.prevDay(symbol, (error, prevDay) => {
            res.send(prevDay)
        })
        
    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting tickerData! ${e}`})
    }
})

router.get('/candlesticks/:symbol/:timeframe/:limit', async (req, res) => {
    try {
        const symbol = req.params.symbol
        const timeframe = req.params.timeframe
        const limit = +req.params.limit

        const candlesticks = await binance.candlesticks(symbol, timeframe, (error, ticks) => {
            console.log(`${symbol} ${timeframe} ${limit} data recieved`);
            res.send(ticks)
        }, {limit: limit})

    } catch (e) {
        res.status(500).json({message: `Something went wrong with getting candlestickes data! ${e}`})
    }
})


module.exports = router