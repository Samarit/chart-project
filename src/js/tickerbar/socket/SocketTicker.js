export default function SocketTicker(ticker, value1, value2) {
    this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${value1}${value2}@ticker`)

    this.socket.onmessage = function(message) {
        console.log(message)
    }

    this.socket.onerror = function(err) {
        console.log(err)
    }
}