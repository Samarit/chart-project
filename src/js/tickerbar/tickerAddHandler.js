import tickerAddContent from "./tickerAddContent"
import tickerCreateModal from "./tickerCreateModal"
import tickerClickHandler from "./tickerClickHandler"
import socketTicker from "./socket/socketTicker"
import tickerDataFetch from "./tickerDataFetch"

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
            ticker.dataset.symbol = value1
            ticker.innerHTML = tickerAddContent(value1, value2)

            const logo = ticker.querySelector('.ticker-logo')
            logo.style.backgroundImage = "url('../../assets/icons/" + value1.toUpperCase() + ".svg')"

            ticker.addEventListener('click', tickerClickHandler)

            tickerDataFetch(ticker)
            socketTicker(ticker, value1 + value2)

            tickerbar.append(ticker)
        })
        .catch((error) => {
            console.log(error)
        })
} 