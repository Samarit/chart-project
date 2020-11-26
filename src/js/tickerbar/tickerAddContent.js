export default function tickerAddContent (ticker, value1, value2) {
    const title = document.createElement('span')
    title.classList.add('ticker-title')
    value1 = value1.toUpperCase()
    value2 = value2.toUpperCase()
    title.innerText = `${value1}/${value2}`

    ticker.append(title)

    return ticker
}