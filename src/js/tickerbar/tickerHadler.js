import chartState from "../../chart.models.js/chartState"
import updateChart from "../chart/updateChart"

export default function tickerHandler (event) {
    if (event.target === this) return false

    chartState.symbol = event.target.id.toUpperCase()

    updateChart()
    console.log('State: ', chartState)
}