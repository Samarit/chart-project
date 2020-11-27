import './css/style.sass'
import chartScaleHandler from './js/chart/chartScaleHandler'
import chartTimeHandler from './js/chart/chartTimeHandler'
import updateChart from './js/chart/updateChart'
import { tickerAddHandler } from './js/tickerbar/tickerAddHandler'
import tickerClickHandler from './js/tickerbar/tickerClickHandler'

const timeBar = document.getElementById('chart-timebar')
const scaleBar = document.getElementById('chart-scalebar')
const tickerbar = document.getElementById('tickerbar')
const tickers = tickerbar.children
const tickerAdd = document.getElementById('ticker-add')

updateChart()

timeBar.addEventListener('click', chartTimeHandler)
scaleBar.addEventListener('click', chartScaleHandler)
for (const ticker of tickers) {
    ticker.addEventListener('click', tickerClickHandler)
}
tickerAdd.addEventListener('click', tickerAddHandler)

