let appFont = getComputedStyle(document.getElementById('app')).fontSize

appFont = +appFont.slice(0, appFont.length - 2) // Cutting 'px' from string and bring it to Number

let chartState = {
    symbol: 'BNBUSDT',
    timeframe: '1m',
    limit: 300,
    fontSize: appFont
}

export default chartState