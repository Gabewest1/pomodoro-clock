class Timer {
    constructor(timer, loadingBar) {
        this.timer = timer
        this.STARTING_TIME = 66
        this.setInterval = undefined
        this.loadingBar = loadingBar
    }
    startTimer() {
        const start = Date.now()

        this.setInterval = setInterval(() => {
            let timeElapsed = Math.round((Date.now() - start) / 1000)
            let percentFinished = (timeElapsed / this.STARTING_TIME) * 100

            if(percentFinished > 100) {
                percentFinished = 100
                clearInterval(this.setInterval)
                this.setInterval = undefined
            }

            let timeRemaining = this.STARTING_TIME - timeElapsed
            let formattedTimeRemaining = formatTime(timeRemaining)
            
            this.timer.textContent = formattedTimeRemaining
            this.loadingBar.style.width = `${percentFinished}%`
        }, 1000)
    }
    toggleTimer() {
        if(!this.setInterval) {
            this.startTimer()
        } else {
            clearInterval(this.setInterval)
            this.setInterval = undefined
        }
    }
}

export default Timer

const formatTime = (time) => {

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