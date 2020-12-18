import './css/style.sass'
import chartScaleHandler from './js/chart/chartScaleHandler'
import chartTimeHandler from './js/chart/chartTimeHandler'
import updateChart from './js/chart/updateChart'
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
    tickerDataFetch(ticker)
    socketTicker(ticker, ticker.dataset.id)
    ticker.addEventListener('click', tickerClickHandler)
}
tickerAdd.addEventListener('click', tickerAddHandler)



