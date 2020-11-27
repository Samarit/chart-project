import chartState from "../../chart.models.js/chartState"
import updateChart from "../chart/updateChart"

export default function tickerClickHandler (event) {
    const symbol = this.dataset.id
    chartState.symbol = symbol.toUpperCase()

    updateChart()
    console.log('State: ', chartState)
}