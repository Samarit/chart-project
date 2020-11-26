import tickerAddContent from "./tickerAddContent"
import tickerCreateModal from "./tickerCreateModal"

const tickerbar = document.getElementById('tickerbar')

export function tickerAddHandler (event) {
    event.preventDefault()
    console.log('tickeradd')

    tickerCreateModal()
        .then(() => {
            const select1 = document.querySelector('[data-select-primary]')
            const select2 = document.querySelector('[data-select-secondary]')
            const value1 = select1.dataset.selectPrimary.toLowerCase()
            const value2 = select2.dataset.selectSecondary.toLowerCase()
            
            let ticker = document.createElement('div')
            ticker.classList.add('ticker')
            ticker.dataset.id = value1 + value2
            ticker = tickerAddContent(ticker, value1, value2)

            tickerbar.append(ticker)
        })
        .catch((error) => {
            console.log('canceled')
            console.log(error)
        })
} 