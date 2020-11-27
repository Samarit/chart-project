import tickerAddContent from "./tickerAddContent"
import tickerCreateModal from "./tickerCreateModal"
import tickerClickHandler from "./tickerClickHandler"
import SocketTicker from "./socket/SocketTicker"

const tickerbar = document.getElementById('tickerbar')

export function tickerAddHandler (event) {
    event.preventDefault()

    tickerCreateModal()
        .then(() => {
            const select1 = document.querySelector('[data-select-primary]')
            const select2 = document.querySelector('[data-select-secondary]')
            const value1 = select1.value.toLowerCase()
            const value2 = select2.value.toLowerCase()
            
            if (value1 === value2) { return false }

            let ticker = document.createElement('div')
            ticker.classList.add('ticker')
            ticker.dataset.id = value1 + value2
            ticker.innerHTML = tickerAddContent(value1, value2)
            ticker.addEventListener('click', tickerClickHandler)

            const socket = new SocketTicker(ticker, value1, value2)

            tickerbar.append(ticker)
        })
        .catch((error) => {
            console.log('canceled')
            console.log(error)
        })
} 