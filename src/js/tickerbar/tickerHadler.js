import chartState from "../../chart.models.js/chartState"
import updateChart from "../chart/updateChart"

export default function tickerHandler (event) {
    if (event.target === this) return false
    
    const symbol = event.target.dataset.id
    chartState.symbol = symbol.toUpperCase()

    updateChart()
    console.log('State: ', chartState)
}