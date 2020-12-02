import './css/style.sass'
import chartScaleHandler from './js/chart/chartScaleHandler'
import chartTimeHandler from './js/chart/chartTimeHandler'
import updateChart from './js/chart/updateChart'
import icons from './js/icons/icons'
import socketTicker from './js/tickerbar/socket/socketTicker'
import { tickerAddHandler } from './js/tickerbar/tickerAddHandler'
import tickerClickHandler from './js/tickerbar/tickerClickHandler'
import tickerDataFetch from './js/tickerbar/tickerDataFetch'

const timeBar = document.getElementById('chart-timebar')
const scaleBar = document.getElementById('chart-scalebar')
const tickerbar = document.getElementById('tickerbar')
const tickers = tickerbar.children
const tickerAdd = document.getElementById('ticker-add')

updateChart()

timeBar.addEventListener('click', chartTimeHandler)
scaleBar.addEventListener('click', chartScaleHandler)
for (const ticker of tickers) {
    addSVG(ticker)
    tickerDataFetch(ticker)
    socketTicker(ticker, ticker.dataset.id)
    ticker.addEventListener('click', tickerClickHandler)
}
tickerAdd.addEventListener('click', tickerAddHandler)

function addSVG(ticker) {
    const symbol = ticker.dataset.symbol.toUpperCase()
    const logo = ticker.querySelector('.ticker-logo')

    logo.innerHTML = icons[symbol]
}