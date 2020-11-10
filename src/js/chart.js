const CanvasJS = require('./canvasjs.stock.min.js')

let dataPoints = []

export function pushDatapoints(data) {
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
    }
}

export const chartCandle = new CanvasJS.StockChart('chart-container', {
    title: {
        text: 'Title'
    },
    charts: [{
        data: [{
            type: 'candlestick',
            dataPoints: dataPoints
        }]
    }]
})




