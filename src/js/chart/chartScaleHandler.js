import chartState from "../../chart.models.js/chartState"
import updateChart from "./updateChart"

export default function chartScaleHandler (event) {
    event.preventDefault()
    if (event.target === this) return false

    const buttons = document.querySelectorAll('#chart-scalebar > button')
    buttons.forEach(btn => {
        btn.classList.remove('active')
    })
    event.target.classList.add('active')
    chartState.limit = +event.target.dataset.id

    updateChart()
}
