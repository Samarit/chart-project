import tickerHandler from "./tickerHandler"

export default function tickerAddContent (ticker, value1, value2) {
    const title = document.createElement('div')
    title.classList.add('ticker-label')
    value1 = value1.toUpperCase()
    value2 = value2.toUpperCase()
    title.innerText = `${value1}/${value2}`

    ticker.addEventListener('click', tickerHandler)

    ticker.append(title)

    return ticker
}