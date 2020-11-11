export default async function getChartData(symbol = 'BTCUSDT', interval = '5m') {
    try {
        const fetched = await fetch(`/api/binance/candlesticks/${symbol}/${interval}`)
        const data = await fetched.json()
        return data
    } catch (e) {
        throw new Error('Something went wrong with getchartData')
    } 
}