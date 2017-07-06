class Timer {
    constructor(timer, loadingBar) {
        this.timer = timer
        this.workTime = 66
        this.breakTime = 300
        this.setInterval = undefined
        this.loadingBar = loadingBar
        this.isPaused = false
        this.startingTime = 0
    }
    startTimer() {
        this.startingTime = Date.now()

        this.setInterval = setInterval(() => {
            if(this.isPaused) {
                this.startingTime += 1000
                return
            }

            let timeElapsed = Math.round((Date.now() - this.startingTime) / 1000)
            let percentFinished = (timeElapsed / this.workTime) * 100

            if(percentFinished > 100) {
                percentFinished = 100
                clearInterval(this.setInterval)
                this.setInterval = undefined
            }

            let timeRemaining = this.workTime - timeElapsed
            let formattedTimeRemaining = formatTime(timeRemaining)

            this.timer.textContent = formattedTimeRemaining
            // this.loadingBar.style.width = `${percentFinished}%`
        }, 1000)
    }
    pauseTimer() {
        this.isPaused = !this.isPaused
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