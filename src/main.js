import { chartCandle, pushDatapoints} from './js/chart'
import getChartData from './js/getChartData'

async function updateChart() {
    try {
        const data = await getChartData('ETHUSDT', '5m')
        pushDatapoints(data)
        chartCandle.render()
    } catch (error) {
        
    }
}
updateChart()