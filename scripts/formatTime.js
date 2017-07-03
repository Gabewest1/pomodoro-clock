//I'm expecting time to be in seconds
//1)As number of seconds 12.312, 1234.23 => 
//2)find number of hours, minutes, seconds
export default (time) => {
    console.log("INTIAL_TIME:", time)

    let hours = 0
    let minutes = 0 
    let seconds = 0

    while(time > 0) {
        console.log("time:", time)
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

    let formattedTime = `${hours}:${minutes}:${seconds}`.replace(/undefined:/g, "")
    console.log("HMS:", hours, minutes, seconds)
    return formattedTime
}