import { chartCandle, pushChartDatapoints} from '../chart.models.js/chart'
import getChartData from './getChartData';

export default async function updateChart() {
    try {
        const data = await getChartData()
        pushChartDatapoints(data)
        chartCandle.render()
    } catch (error) {
        console.log(error)
    }
}