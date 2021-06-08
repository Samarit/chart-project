import calculateRSIdata from '../js/chart/calculateRSIdata.js'
import chartState from './chartState.js'

const CanvasJS = require('./canvasjs.stock.min.js')
const container = document.getElementById('chart-container')
let chartHeight = container.offsetHeight


const risingColor = '#7d7' 
const fallingColor = 'red'
const gridColor = '#C9BDA5'

let dataPoints = []
let dataPointsVolume = []
let dataPointsRSI = []

const noop = () => {return ''}

export const chartCandle = new CanvasJS.StockChart('chart-container', {
    charts: [
        //Candlesticks chart
        {
            zoomEnabled: true,
            title: {
                text: 'Chart',
                fontSize: chartState.fontSize * 2
            },
            height: chartHeight * 0.69,
            axisX: {
                labelFormatter: noop,
                tickLength: 0,
                tickThickness: 0,
                gridThickness: 0,
                lineThickness: 0
            },
            axisY: {
                labelFontSize: chartState.fontSize,
                gridColor: gridColor
            },
            data: [{
                type: 'candlestick',
                dataPoints: dataPoints,
                color: 'grey',
                risingColor: risingColor,
                fallingColor: fallingColor,
                click: noop()
            }]
        },
        //Volume chart
        {
            title: {
                text: ''
            },
            height: chartHeight * 0.17,
            axisX: {
                labelFormatter: noop,
                tickLength: 0,
                tickThickness: 0,
                gridThickness: 0,
                lineThickness: 0
            },
            axisY: {
                //labelFontSize: 0,
                gridColor: gridColor
            },
            data: [{
                type: 'column',
                dataPoints: dataPointsVolume
            }]
        },
        //RSI chart
        {
            title: '',
            height: chartHeight * 0.13,
            axisY: {
                gridColor: gridColor,
                //stripLines: [{
                //    startValue: 30,
                //    endValue: 70,
                //    color: 'grey'
                //}],
                //minimum: 0,
                //maximum: 100
            },
            axisX: {
                title: "",
                tickLength: 0,
                margin: 0,
                lineThickness: 0
            },
            data: [{
                type: 'line',
                color: 'gold',
                dataPoints: dataPointsRSI
            }]
        },
    ],
    rangeSelector: {
        enabled: false
    },
    navigator: {
        enabled: true,
        dynamicUpdate: false
    },
    theme: "dark2",
    backgroundColor: "#000"
})

// Function for handling and push data to chart arrays
export function pushChartDatapoints(data) {
    dataPoints.length = 0
    dataPointsVolume.length = 0
    dataPointsRSI.length = 0
    
    
    for (let point of data) {
        const chng = point[4] - point[1]

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
            y: Number(point[5]), // Quote volume in data, [7] is asset volume 
            color: chng > 0 ? risingColor : fallingColor // color of this point based on price change
        })
    }

    // Changing datapointsRSI
    chartCandle.options.charts[2].data[0].dataPoints = calculateRSIdata(data)
}

