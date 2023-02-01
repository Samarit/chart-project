let htmlFont = getComputedStyle(document.getElementsByTagName('html')[0]).fontSize

htmlFont = +htmlFont.slice(0, htmlFont.length - 2) // Cutting 'px' from string and bring it to Number

let chartState = {
    symbol: 'BNBUSDT',
    timeframe: '1h',
    limit: 300,
    fontSize: htmlFont
}

export default chartState