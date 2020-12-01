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
    const datapoints = chartCandle.charts[0].options.data[0].dataPoints
    
    //Changing specific datapoints in last chart's kline 
    datapoints[datapoints.length - 1].y[0] = Number(data.k.o) // open
    datapoints[datapoints.length - 1].y[1] = Number(data.k.h) // high
    datapoints[datapoints.length - 1].y[2] = Number(data.k.l) // low
    datapoints[datapoints.length - 1].y[3] = Number(data.k.c) // close
    console.log('socket')
    chartCandle.render()
}