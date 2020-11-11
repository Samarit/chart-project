import { chartCandle, pushChartDatapoints} from './chart.models.js/chart'
import getChartData from './js/getChartData'

async function updateChart() {
    try {
        const data = await getChartData()
        pushChartDatapoints(data)
        chartCandle.render()
        console.log(chartCandle);
    } catch (error) {
        
    }
}
updateChart()