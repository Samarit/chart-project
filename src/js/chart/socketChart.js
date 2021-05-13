import { chartCandle } from "../../chart.models.js/chart";
import chartState from "../../chart.models.js/chartState";

export default function socketChart() {
    let socket = {}

    return {
        open() {
            socket.close && socket.close()
            socket = new WebSocket(`wss://stream.binance.com:9443/ws/${chartState.symbol.toLowerCase()}@kline_${chartState.timeframe}`)
            socket.onmessage = _onMsg
        }
    }
}

function _onMsg(message) {

    const data = JSON.parse(message.data)

    let datapointsChart = chartCandle.charts[0].options.data[0].dataPoints
    let datapointsVolume = chartCandle.charts[1].options.data[0].dataPoints
    let datapointsRSI = chartCandle.charts[2].options.data[0].dataPoints

    let chng = data.k.c - data.k.o // price change 
    
    //Changing specific datapoints in last chart's kline 
    datapointsChart[datapointsChart.length - 1].y[0] = Number(data.k.o) // open
    datapointsChart[datapointsChart.length - 1].y[1] = Number(data.k.h) // high
    datapointsChart[datapointsChart.length - 1].y[2] = Number(data.k.l) // low
    datapointsChart[datapointsChart.length - 1].y[3] = Number(data.k.c) // close

    //Changing last volume bar
    datapointsVolume[datapointsVolume.length - 1].y = Number(data.k.v) // data.k.q for quote volume
    datapointsVolume[datapointsVolume.length - 1].color = chng > 0 ? '#7d7' : 'red'


    // If kline closed - push new candlestick to datapoints
    if (data.k.x) {

        datapointsChart.shift()
        datapointsVolume.shift()
        datapointsRSI.shift()

        datapointsChart.push({
            x: new Date(data.k.T + 1000), //Closed time of this kline + 1 sec for next kline
            y: [] // This array will be filled in next socket message
        })
        datapointsVolume.push({
            x: new Date(data.k.T + 1000),
            y: 0
        })

        chartCandle.render()
        return
    }
    
    chartCandle.render()
}