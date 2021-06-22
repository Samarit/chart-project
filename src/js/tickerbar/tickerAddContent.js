export default function tickerAddContent(value1, value2) {
    return `
    <div class="ticker-title">
        <div class="ticker-logo" ></div>
        <div class="ticker-label">${value1.toUpperCase()}/${value2.toUpperCase()}</div>
    </div>
    <div class="ticker-price">
        <div class="ticker-price-pct"></div>
        <div class="ticker-price-value"></div>
    </div>
    <div class="ticker-volume">
        <div class="ticker-volume-label">24h<br>Vol</div>
        <div class="ticker-volume-value"></div>
    </div>
    `
}