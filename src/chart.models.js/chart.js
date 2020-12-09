const CanvasJS = require('./canvasjs.stock.min.js')

const container = document.getElementById('chart-container') 
let chartHeight = container.offsetHeight

let dataPoints = []
let dataPointsVolume = []

const noop = () => {return ''}

export const chartCandle = new CanvasJS.StockChart('chart-container', {
    charts: [{
        title: {
            text: 'Chart'
        },
        height: chartHeight * 0.75,
        axisX: {
            labelFormatter: noop,
            tickLength: 0,
            tickThickness: 0,
            gridThickness: 0,
            lineThickness: 0
        },
        data: [{
            type: 'candlestick',
            dataPoints: dataPoints
        }]
    },{
        title: {
            text: ''
        },
        height: chartHeight * 0.15,
        axisX: {
            labelFormatter: noop,
            tickLength: 0,
            tickThickness: 0,
            gridThickness: 0,
            lineThickness: 0
        },
        data: [{
            type: 'column',
            dataPoints: dataPointsVolume
        }]
    }
    ],
    rangeSelector: {
        enabled: false
    },
    navigator: {
        enabled: true,
        dynamicUpdate: false,
        height: chartHeight * 0.1,
        axisX: {
            valueFormatString: 'MMM DD'
        }
    }
})

export function pushChartDatapoints(data) {
    dataPoints.length = 0
    dataPointsVolume.length = 0
    
    for (let point of data) {
        dataPoints.push({
            x: new Date(point[0]),
            y: [
                Number(point[1]), // open
                Number(point[2]), // low
                Number(point[3]), // high
                Number(point[4])  // close
            ]
        })
        dataPointsVolume.push({
            x: new Date(point[0]),
            y: Number(point[7]) // Asset volume in data
        })
    }
}



