import chartState from './chartState.js'

const CanvasJS = require('./canvasjs.stock.min.js')
CanvasJS.addColorSet("defaultColorSet", [//colorSet Array
    "#19FF00",
    "#FF1900"
  ])

const container = document.getElementById('chart-container')
let chartHeight = container.offsetHeight

let dataPoints = []
let dataPointsVolume = []
let dataPointsNav = []

const noop = () => {return ''}

export const chartCandle = new CanvasJS.StockChart('chart-container', {
    charts: [
        //Candlesticks chart
    {
        title: {
            text: 'Chart',
            fontSize: chartState.fontSize * 2
        },
        height: chartHeight * 0.75,
        axisX: {
            labelFormatter: noop,
            tickLength: 0,
            tickThickness: 0,
            gridThickness: 0,
            lineThickness: 0
        },
        axisY: {
            labelFontSize: chartState.fontSize
        },
        data: [{
            type: 'candlestick',
            dataPoints: dataPoints,
            color: 'grey',
            risingColor: '#7d7',
            fallingColor: 'red'
        }],
        //zoomEnabled: true
    },
        //Volume chart
    {
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
        axisY: {
            labelFontSize: 0
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
        enabled: false,
        dynamicUpdate: false,
        height: chartHeight * 0.1,
        axisX: {
            valueFormatString: 'MMM DD',
            labelFontColor: '#fff'
        },
        data: [{
            type: 'line',
            dataPoints: dataPointsNav
        }]
    },
    //colorSet: "defaultColorSet",
    theme: "dark2",
    backgroundColor: "#000"
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

const canvas = document.getElementsByClassName("canvasjs-chart-canvas")[1]



function zoom (e) {
//    e.preventDefault()
//    
//    //if(e.clientX < chartCandle.charts[0].plotArea.x1 || e.clientX > chartCandle.charts[0].plotArea.x2 || e.clientY < chartCandle.charts[0].plotArea.y1 || e.clientY > chartCandle.charts[0].plotArea.y2)
//    //    return
//      
//    var axisX = chartCandle.charts[0].axisX[0];
//    var viewportMin = axisX.get("viewportMinimum"),
//        viewportMax = axisX.get("viewportMaximum"),
//        interval = axisX.get("minimum")
//    

console.log('wheek')
//  
//    var newViewportMin, newViewportMax;
//  
//    if (e.deltaY < 0) {
//      newViewportMin = viewportMin + interval;
//      newViewportMax = viewportMax - interval;
//    }
//    else if (e.deltaY > 0) {
//      newViewportMin = viewportMin - interval;
//      newViewportMax = viewportMax + interval;
//    }
//  
//    if(newViewportMin >= chart.axisX[0].get("minimum") && newViewportMax <= chart.axisX[0].get("maximum") && (newViewportMax - newViewportMin) > (2 * interval)){
//      chart.axisX[0].set("viewportMinimum", newViewportMin, false);
//      chart.axisX[0].set("viewportMaximum", newViewportMax);
//    }
//  
}

canvas.onclick = zoom

window.mychart = chartCandle