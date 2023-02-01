import './css/style.sass'
import chartScaleHandler from './js/chart/chartScaleHandler'
import chartTimeHandler from './js/chart/chartTimeHandler'
import updateChart from './js/chart/updateChart'
import colorSwitcher from './js/tickerbar/colorSwitcher'
import socketTicker from './js/tickerbar/socket/socketTicker'
import { tickerAddHandler } from './js/tickerbar/tickerAddHandler'
import tickerClickHandler from './js/tickerbar/tickerClickHandler'
import tickerDataFetch from './js/tickerbar/tickerDataFetch'
import volumeFormatter from './js/tickerbar/volumeFormatter'

const app = document.getElementById('app')
const $timeBar = document.getElementById('chart-timebar')
const $scaleBar = document.getElementById('chart-scalebar')
const $tickerbar = document.getElementById('tickerbar')
const $tickerAdd = document.getElementById('ticker-add')

const tickers = Array.from($tickerbar.children)
console.log($tickerbar.children)
console.log(tickers);

// Initializing chart render
updateChart()

$timeBar.addEventListener('click', chartTimeHandler)
$scaleBar.addEventListener('click', chartScaleHandler)

const tickersData = [] // Ticker data fetched from Binance


for (const ticker of tickers) {

    tickersData.push(tickerDataFetch(ticker))

    //socketTicker(ticker, ticker.dataset.id)

    ticker.addEventListener('click', tickerClickHandler)
}

function getTickerData() {
    return Promise.all(tickers.map((ticker) => {
        return tickerDataFetch(ticker)
    })
    ).then((result) => {
        result.map((ticker) => {
            let _ticker = $tickerbar.children[ticker.symbol]

            console.log(ticker.time)

            const pricePct = _ticker.querySelector('.ticker-price-pct')
            const priceValue = _ticker.querySelector('.ticker-price-value')
            const volumeValue = _ticker.querySelector('.ticker-volume-value')

            pricePct.innerText = ticker.pricePct + '%'
            priceValue.innerText = ticker.priceValue
            volumeValue.innerText = ticker.volumeValue

            colorSwitcher(_ticker, ticker.pricePct)

            socketTicker(_ticker, _ticker.dataset.id)
        })
    })
}

getTickerData()

$tickerAdd.addEventListener('click', tickerAddHandler)



