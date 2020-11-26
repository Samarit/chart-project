import chartState from "../../chart.models.js/chartState"
import updateChart from "../chart/updateChart"

export default function tickerHandler (event) {
    const symbol = this.dataset.id
    console.log(this)
    chartState.symbol = symbol.toUpperCase()

    updateChart()
    console.log('State: ', chartState)
}