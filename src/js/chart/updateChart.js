import { chartCandle, pushChartDatapoints} from '../../chart.models.js/chart'
import chartState from '../../chart.models.js/chartState';
import getChartData from './getChartData';
import socketChart from './socketChart'

const socket = socketChart()
const loader = document.getElementById('loader')

export default async function updateChart() {
    try {
        loader.style.display = 'flex'

        const data = await getChartData()
        pushChartDatapoints(data)
        chartCandle.options.charts[0].title.text = chartState.symbol
        chartCandle.render()

        loader.style.display = 'none'

        socket.open()
        
        console.log(chartState)
        console.log(chartCandle)
        
    } catch (error) {
        console.log(error)
    }
}