// Async request to backend for overall chart data

import chartState from "../../chart.models.js/chartState"

export default async function getChartData(
    //default props
    symbol = chartState.symbol, 
    timeframe = chartState.timeframe, 
    limit = chartState.limit
    ) {

        const headers = {
            symbol: symbol,
            timeframe: timeframe,
            limit: limit
        }

        try {
            const fetched = await fetch(`/api/binance/candlesticks`, {
                headers: headers
            })
            
            const data = await fetched.json()
            return data
        } catch (e) {
            throw new Error('Something went wrong with getchartData')
        } 
    }