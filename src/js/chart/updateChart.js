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

        
        _titleUpdater(chartState.symbol)
        
        _setViewport(data)
        chartCandle.render()

        loader.style.display = 'none'

        socket.open()
        
        console.log('Chart state: ' ,chartState)
        
    } catch (error) {
        console.log(error)
    }
}

function _titleUpdater (symbol) {
    let symbolStart = ''
    let symbolEnd = ''
    let slicePos = symbol.length - 3

    if (symbol.endsWith('USDT')) {
        slicePos = symbol.indexOf('USDT')
    }
    
    symbolStart = symbol.slice(0, slicePos)
    symbolEnd = symbol.slice(slicePos)

    chartCandle.options.charts[0].title.text = `${symbolStart}/${symbolEnd}`

}

function _setViewport(data) {
    const viewMin = data[0][0]
    const viewMax = data[data.length - 1][0]

    chartCandle._axisXMin = viewMin
    
    //chartCandle.charts[0].axisX[0].set('viewportMinimum', viewMin)
    //chartCandle.charts[0].axisX[0].set('viewportMaximum', viewMax)
}