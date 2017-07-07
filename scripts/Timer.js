class Timer {
    constructor(timer, loadingBar, settings) {
        this.timer = timer
        this.workTime = settings.workValue
        this.breakTime = settings.breakValue
        this.state = "work"
        this.timeState = this.workTime
        this.timersSetInterval = undefined
        this.isPaused = false
        this.skipBreak = false
        this.percentFinished = 0
        this.startingTime = 0
        this.settings = settings

        this.setTimerHTML(this.workTime)
    }
    handleTimerFinished() {
        if(this.skipBreak) {
            this.timeState = this.workTime
            this.skipBreak = false
        } else if(this.state === "work") {
            this.state = "break"
            this.timeState = this.breakTime
        } else if(this.state === "break") {
            this.state = "work"
            this.timeState = this.workTime
        }

        this.isPaused = false
        this.setTimerHTML(this.timeState)
    }
    startTimer() {
        this.startingTime = Date.now()

        this.timersSetInterval = setInterval(() => {
            if(this.isPaused) {
                this.startingTime += 1000
                return
            }

            let timeElapsed = Math.round((Date.now() - this.startingTime) / 1000)
            this.percentFinished = (timeElapsed / this.timeState) * 100

            if(this.percentFinished > 100) {
                this.percentFinished = 100
                clearInterval(this.timersSetInterval)
                this.timersSetInterval = undefined
                this.handleTimerFinished()
            } else {
                let timeRemaining = this.timeState - timeElapsed
                this.setTimerHTML(timeRemaining)
            }

            // this.loadingBar.style.width = `${percentFinished}%`
        }, 1000)
    }
    togglePause() {
        this.isPaused = !this.isPaused
    }
    resetTimer() {
        clearInterval(this.timersSetInterval)
        this.timersSetInterval = undefined
        this.isPaused = false
        this.timeState = (this.state === "work") ? this.workTime : this.breakTime
        this.setTimerHTML(this.timeState)
    }
    setTimerHTML(time) {
        this.timer.textContent = formatTime(time)
    }
    setWorkTime(time) {
        this.workTime = this.settings.workValue
        if(!this.timersSetInterval && this.state === "work") {
            console.log(this.workTime)
            this.setTimerHTML(this.workTime)
        }
    }
    setBreakTime(time) {
        this.breakTime = this.settings.breakValue
        if(!this.timersSetInterval && this.state === "break") {
            this.setTimerHTML(this.breakTime)
        }
    }
}

export default Timer

const formatTime = (time) => {

    time = parseInt(time)
    
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
    
    let formattedTime = unformattedTime
                            .replace(/undefined:/g, "")
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