import './css/style.sass'
import chartScaleHandler from './js/chart/chartScaleHandler'
import chartTimeHandler from './js/chart/chartTimeHandler'
import updateChart from './js/chart/updateChart'
import { tickerAddHandler } from './js/tickerbar/tickerAddHandler'
import tickerHandler from './js/tickerbar/tickerHandler'

const timeBar = document.getElementById('chart-timebar')
const scaleBar = document.getElementById('chart-scalebar')
const tickerBar = document.getElementById('tickerbar')
const tickerAdd = document.getElementById('ticker-add')



updateChart()

timeBar.addEventListener('click', chartTimeHandler)
scaleBar.addEventListener('click', chartScaleHandler)
tickerBar.addEventListener('click', tickerHandler)
tickerAdd.addEventListener('click', tickerAddHandler)