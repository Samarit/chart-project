import { chartCandle } from "../../chart.models.js/chart";
import chartState from "../../chart.models.js/chartState";

export default function socketChart() {
    let socket = {}

    return {
        open() {
            socket.close && socket.close()
            socket = new WebSocket(`wss://stream.binance.com:9443/ws/${chartState.symbol.toLowerCase()}@kline_${chartState.timeframe}`)
            socket.onmessage = _onMsg

            socket.onclose = () => console.log('socketChart closed')
        }
    }
}

function _onMsg(message) {
    const data = JSON.parse(message.data)
    let datapointsChart = chartCandle.charts[0].options.data[0].dataPoints
    let datapointsVolume = chartCandle.charts[1].options.data[0].dataPoints
    
    //Changing specific datapoints in last chart's kline 
    datapointsChart[datapointsChart.length - 1].y[0] = Number(data.k.o) // open
    datapointsChart[datapointsChart.length - 1].y[1] = Number(data.k.h) // high
    datapointsChart[datapointsChart.length - 1].y[2] = Number(data.k.l) // low
    datapointsChart[datapointsChart.length - 1].y[3] = Number(data.k.c) // close

    //Changing last volume bar
    datapointsVolume[datapointsVolume.length - 1].y = Number(data.k.q)

    // If kline closed - push new candlestick to datapoints
    if (data.k.x) {
        console.log('Closing kline recieved')
        datapointsChart.shift()
        datapointsVolume.shift()

        
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
    console.log('socket')
    chartCandle.render()
}