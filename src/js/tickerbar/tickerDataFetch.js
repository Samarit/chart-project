import colorSwitcher from "./colorSwitcher"
import volumeFormatter from "./volumeFormatter"

export default async function tickerDataFetch(ticker) {
    try {
        const fetched = await fetch(`api/binance/tickerData/${ticker.dataset.id}`)
        const data = await fetched.json()

        const pricePct = ticker.querySelector('.ticker-price-pct')
        const priceValue = ticker.querySelector('.ticker-price-value')
        const volumeValue = ticker.querySelector('.ticker-volume-value')

        colorSwitcher(ticker, data.priceChangePercent)

        pricePct.innerText = Number(data.priceChangePercent)
        priceValue.innerText = Number(data.lastPrice)
        volumeValue.innerText = volumeFormatter(data.quoteVolume)

    } catch (e) {
        console.log(new Error(e))
    }
}

