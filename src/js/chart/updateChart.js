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
        
        chartCandle.render()
        
        chartState.viewMinDefault = chartCandle._axisXMin
        chartState.viewMaxDefault = chartCandle._axisXMax

        const resetBtn = document.getElementById('reset-btn')
        resetBtn.addEventListener('click', () => {
            console.log('loh')
            chartCandle.sessionVariables._axisXMin = chartState.viewMinDefault
            chartCandle.sessionVariables._axisXMax = chartState.viewMaxDefault
            chartCandle.render()
        })
        

        console.log('minimum', data[0][0])
        console.log('maximum', data[data.length - 1][0])

        loader.style.display = 'none'

        socket.open()
        
        console.log('Chart state: ' ,chartState)

        console.log('_axisXMin ', chartCandle._axisXMin)
        console.log('_axisXMax ', chartCandle._axisXMax)
        console.log('rangeEventParametr ', chartCandle._rangeEventParameter)
        console.log('sessionVars: ', chartCandle.sessionVariables)
        
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
