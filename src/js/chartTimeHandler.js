import chartState from "../chart.models.js/chartState"
import getChartData from "./getChartData"
import updateChart from "./updateChart"


export default function chartTimeHandler(event) {
    event.preventDefault()

    if (event.target === this) {
        return false
    }
    chartState.timeframe = event.target.id
    updateChart()
    console.log(chartState);
}