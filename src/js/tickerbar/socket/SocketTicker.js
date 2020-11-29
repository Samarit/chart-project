import colorSwitcher from "../colorSwitcher"

export default function SocketTicker(ticker, pair) {
    this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${pair}@ticker`)
    
    const priceValue = ticker.querySelector('.ticker-price-value')
    const pricePct = ticker.querySelector('.ticker-price-pct')
    const volumeValue = ticker.querySelector('.ticker-volume-value')

    this.socket.onmessage = function(message) {
        const data = JSON.parse(message.data)
        pricePct.innerText = Number(data.P).toFixed(1) + '%' // 24h price changing for pair
        priceValue.innerText = Number(data.c) // Last price for pair
        volumeValue.innerText = Number(data.q).toFixed(1) // 24h quote volume

        colorSwitcher(ticker, data.P)
    }

    this.socket.onerror = function(err) {
        console.log(err)
    }
}