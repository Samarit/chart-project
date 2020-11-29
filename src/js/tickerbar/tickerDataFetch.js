import colorSwitcher from "./colorSwitcher"

export default async function tickerDataFetch(ticker) {
    try {
        const fetched = await fetch(`api/binance/tickerData/${ticker.dataset.id}`)
        const data = await fetched.json()

        const priceValue = ticker.querySelector('.ticker-price-value')
        const volumeValue = ticker.querySelector('.ticker-volume-value')
        const pricePct = ticker.querySelector('.ticker-price-pct')

        colorSwitcher(ticker, data.priceChangePercent)

        priceValue.innerText = Number(data.lastPrice)
        volumeValue.innerText = Number(data.volume)
        pricePct.innerText = Number(data.priceChangePercent)
    } catch (e) {
        console.log(new Error(e))
    }
}