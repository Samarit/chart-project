import { chartCandle, pushChartDatapoints} from '../../chart.models.js/chart'
import chartState from '../../chart.models.js/chartState';
import getChartData from './getChartData';

export default async function updateChart() {
    try {
        const data = await getChartData()
        pushChartDatapoints(data)
        
        chartCandle.options.charts[0].title.text = chartState.symbol
        chartCandle.render()
        
        console.log(chartCandle)
    } catch (error) {
        console.log(error)
    }
}