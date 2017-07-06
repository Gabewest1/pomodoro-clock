export default (time) => {

    let hours = 0
    let minutes = 0 
    let seconds = 0

    while(time > 0) {
        if(time >= 3600) {
            hours++
            time -= 3600
        } else if(time >= 60) {
            minutes++
            time -= 60
        } else {
            seconds += time
            time = 0
        }
    }

    let unformattedTime = `${hours}:${minutes}:${seconds}`
    
    let formattedTime = unformattedTime.replace(/undefined:/g, "")
                                        .split(":")
                                        .reduce((time, val) => {
                                            let isSingleDigitNumber = val.length === 1 
                                            return isSingleDigitNumber ? time.concat(":0" + val) : time.concat(":" + val) 
                                        }, "")
                                        .replace(":", "")       //Their is always a ":"" in the beginning after reduce

    const removeLeadingZeros = (time) => time.startsWith("00:") ? removeLeadingZeros(time.substring(3)) : time

    formattedTime = removeLeadingZeros(formattedTime)

    return formattedTime
}