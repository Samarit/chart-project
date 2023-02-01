import volumeFormatter from "./volumeFormatter"

export default async function tickerDataFetch(ticker) {
    try {

        let start = Date.now()

        const symbol = ticker.dataset.id

        const fetched = await fetch(
            `api/binance/tickerData`, 
            {
                headers: {
                    symbol: symbol
            }})
        
        const data = await fetched.json()

        let time = Date.now() - start

        return {
            symbol: ticker.dataset.symbol,
            pricePct: Number(data.priceChangePercent).toFixed(1),
            priceValue: Number(data.lastPrice),
            volumeValue: volumeFormatter(data.quoteVolume),
            time: time
        }

        

    } catch (e) {
        console.log(new Error(e))
    }
}

