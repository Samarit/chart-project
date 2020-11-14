import chartState from "../chart.models.js/chartState"

export default async function getChartData(symbol = chartState.symbol, timeframe = chartState.timeframe) {
    try {
        const fetched = await fetch(`/api/binance/candlesticks/${symbol}/${timeframe}`)
        const data = await fetched.json()
        return data
    } catch (e) {
        throw new Error('Something went wrong with getchartData')
    } 
}