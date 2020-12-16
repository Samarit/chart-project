export default function colorSwitcher(ticker, chng) {
    const color = Number(chng) > 0 ? '#4f4' : 'red'
      
    _switchColor(ticker, color)
}

function _switchColor (ticker, color) {
    const priceDivs = ticker.querySelector('.ticker-price')
    
    ticker.style.borderColor = color
    priceDivs.style.color = color
}