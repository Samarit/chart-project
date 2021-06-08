// Async request to backend for overall chart data

import chartState from "../../chart.models.js/chartState"

export default async function getChartData(
    symbol = chartState.symbol, 
    timeframe = chartState.timeframe, 
    limit = chartState.limit
    ) {
        try {
            const fetched = await fetch(`/api/binance/candlesticks/${symbol}/${timeframe}/${limit}`)
            const data = await fetched.json()
            return data
        } catch (e) {
            throw new Error('Something went wrong with getchartData')
        } 
    }