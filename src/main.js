import './css/style.sass'
import chartTimeHandler from './js/chartTimeHandler'
import updateChart from './js/updateChart'

const timebar = document.getElementById('chart-timebar')


updateChart()

timebar.addEventListener('click', chartTimeHandler)