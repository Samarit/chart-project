export default function volumeFormatter(data) {
    let str = data.split('.')[0]
    let arr = []
    
    while(1) {
        arr.unshift(str.slice(str.length - 3)) // Pushing to array last 3 symbols of string  
        str = str.slice(0, str.length - 3)     // Cutting last 3 symbols

        if (str.length <= 3) { // If string length <= 3 then pushing what last and breaking the cycle
            arr.unshift(str)
            break
        }
    }

    return arr.join(',') 
}