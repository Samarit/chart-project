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
    datapoints[datapoints.length - 1].y[3] = Number(data.k.c)
    console.log('socket')
    chartCandle.render()
}