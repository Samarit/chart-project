import chartState from "../../chart.models.js/chartState"
import updateChart from "./updateChart"


export default function chartTimeHandler(event) {
    event.preventDefault()
    if (event.target === this) return false

    const buttons = document.querySelectorAll('#chart-timebar > button')
    buttons.forEach(btn => {
        btn.classList.remove('active')
    })
    chartState.timeframe = event.target.dataset.id
    event.target.classList.add('active')
    
    updateChart()
}