import './css/style.sass'
import chartScaleHandler from './js/chartScaleHandler'
import chartTimeHandler from './js/chartTimeHandler'
import updateChart from './js/updateChart'

const timeBar = document.getElementById('chart-timebar')
const scaleBar = document.getElementById('chart-scalebar')


updateChart()

timeBar.addEventListener('click', chartTimeHandler)
scaleBar.addEventListener('click', chartScaleHandler)