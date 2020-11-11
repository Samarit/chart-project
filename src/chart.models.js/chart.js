const CanvasJS = require('./canvasjs.stock.min.js')

let dataPoints = []
let dataPointsVolume = []


export const chartCandle = new CanvasJS.StockChart('chart-container', {
    charts: [{
        title: {
            text: 'Chart'
        },
        height: 500,
        data: [{
            type: 'candlestick',
            dataPoints: dataPoints
        }]
    },
    {
        title: {
            text: 'Volume'
        },
        height: 200,
        data: [{
            dataPoints: dataPointsVolume
        }]
    }
    ],
    rangeSelector: {
        buttons: [
            {
                range: 1,
                rangeType: 'day',
                label: '1day'
            }, {
                range: 2,
                rangetype: 'day',
                label: '2day'
            }
        ]
    }
})

export function pushChartDatapoints(data) {
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



