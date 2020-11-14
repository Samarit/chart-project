const CanvasJS = require('./canvasjs.stock.min.js')

let dataPoints = []
let dataPointsVolume = []


export const chartCandle = new CanvasJS.StockChart('chart-container', {
    charts: [{
        title: {
            text: 'Chart'
        },
        height: 300,
        data: [{
            type: 'candlestick',
            dataPoints: dataPoints
        }]
    },{
        title: {
            text: 'Volume'
        },
        height: 100,
        data: [{
            dataPoints: dataPointsVolume
        }]
    }
    ],
    rangeSelector: {
        enabled: false
    },
    navigator: {
        enabled: false
    }
})

export function pushChartDatapoints(data) {
    dataPoints.length = 0
    dataPointsVolume.length = 0
    
    for (let point of data) {
        dataPoints.push({
            x: new Date(point[0]),
            y: [
                Number(point[1]),
                Number(point[2]),
                Number(point[3]),
                Number(point[4])
            ]
        })
        dataPointsVolume.push({
            x: new Date(point[0]),
            y: Number(point[5])
        })
    }
}



