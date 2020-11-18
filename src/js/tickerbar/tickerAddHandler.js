import tickerCreate from "./tickerCreate"

const tickerbar = document.getElementById('tickerbar')

export function tickerAddHandler (event) {
    event.preventDefault()
    console.log('tickeradd')

    tickerCreate()
        .then(() => {
            const ticker = document.createElement('div')
            ticker.classList.add('ticker')
            ticker.dataset.id = 'test'
            tickerbar.append(ticker)
        })
        .catch(() => {
            console.log('canceled')
        })
} 