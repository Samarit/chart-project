export default function calculateRSIdata(data) {
    let avgG = 0, // average gains
        avgL = 0, // average losses  
        gains = 0,
        losses = 0,
        rs = 0, // relative strength
        rsi = 0, // relative strength index
        rsiDataPoints = []

    if (data.length < 14) {
        console.log('Not enough data for RSI calculate')
        return
    }

    //Calculating gains and losses for first 14 points
    for (let i = 0; i < 14; i++) {

        let chng = data[i][4] - data[i][1] // price change on single timeframe
        
        if (chng >= 0) {
            gains += chng
        } else {
            losses += chng * (-1)
        }
        rsiDataPoints.push({
            x: new Date(data[i][0]),
            y: null
        })

    }

    //Calculating initial average gains and losses
    avgG = gains / 14
    avgL = losses / 14

    for (let i = 14; i < data.length; i++) {

        let chng = data[i][4] - data[i][1]
        
        if (chng >= 0) {
            avgG = (avgG * 13 + chng) / 14
        } else {
            chng *= (-1)
            avgL = (avgL *13 + chng) / 14
        }

        rs = avgG / avgL
        rsi = (100 - 100 / (1 + rs))

        rsiDataPoints.push({
            x: new Date(data[i][0]),
            y: rsi
        })
    }

    console.log('rsidata', rsiDataPoints)

    return rsiDataPoints
}