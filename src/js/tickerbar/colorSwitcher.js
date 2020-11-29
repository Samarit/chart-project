export default function colorSwitcher(ticker, chng) {
    Number(chng) > 0 ? ticker.style.borderColor = '#7d7' : ticker.style.borderColor = 'red'
}