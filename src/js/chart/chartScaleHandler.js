import chartState from "../../chart.models.js/chartState"
import updateChart from "./updateChart"

export default function chartScaleHandler (event) {
    event.preventDefault()

    if (event.target === this) return false

    chartState.limit = +event.target.dataset.id
    updateChart()
}
