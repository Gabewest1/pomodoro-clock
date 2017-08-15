export default class Pomodoro {
    constructor(timer, settings) {
        this.timer = timer
        this.settings = settings
        this.loadingBar = document.getElementsByClassName("loading-bar")[0]
        this.startBtn = document.querySelector(".startBtn")
        this.startBtnText = document.querySelector(".startBtn span")
    }

    handleButtonClick(e) {
        let button = e.target.textContent.toLowerCase().trim()
        console.log("HANDLEBUTTONCLICK:", button)
        switch(button) {
            case "start": {
                this.handleStartButtonClick()
                break
            }
            case "pause": {
                this.handlePauseButtonClick()
                break
            }
            case "skip break": {
                this.handleSkipBreakButtonClick()
                break
            }
            case "reset": {
                this.handleResetButtonClick()
                break
            }
            default:
                return
        }
    }
    startTimer() {
        console.log('STARTING TIMER')
        this.startBtn.classList.add("active")        
        this.startBtnText.textContent = ""

        this.timer.startingTime = Date.now()
        this.timer.timeState = (this.timer.state === "work") ? this.timer.workTime : this.timer.breakTime

        this.timer.timersSetInterval = setInterval(() => {
            if(this.timer.isPaused) {
                this.timer.startingTime += 1000
                return
            }

            let timeElapsed = Math.round((Date.now() - this.timer.startingTime) / 1000)
            this.timer.percentFinished = (timeElapsed / this.timer.timeState) * 100

            if(this.timer.percentFinished > 100) {
                this.timer.percentFinished = 100
                clearInterval(this.timer.timersSetInterval)
                this.timer.timersSetInterval = undefined
                this.handleTimerFinished()
            } else {
                let timeRemaining = this.timer.timeState - timeElapsed
                this.timer.setTimerHTML(timeRemaining)
            }

            console.log("PERCENT FINISHED:", this.timer.percentFinished, this.loadingBar)
            this.loadingBar.style.width = `${this.timer.percentFinished}%`
        }, 1000)
    }
    handleTimerFinished() {
        this.startBtn.classList.remove("active")
        this.startBtnText.textContent = "Start"
        document.querySelector(".pauseBtn").textContent = "Reset"

        if(this.timer.state === "break" || (this.timer.state === "work" && this.timer.skipBreak)) {
            let rounds = document.querySelector(".rounds")
            let roundsCompleted = rounds.textContent.match(/\d+\//)[0].replace("/", "")
            console.log("ROUNDS COMPLETED:", roundsCompleted + 1)
            rounds.textContent = rounds.textContent.replace(roundsCompleted, `${1 + parseInt(roundsCompleted)}`)
        }

        this.loadingBar.style.transition = "none"
        this.loadingBar.style.width = 0
        this.loadingBar.style.transition = "all .5s linear" //Get this from its style-sheet

        this.timer.handleTimerFinished()

        setTimeout(() => this.startTimer(), 2000)
    }
    handleSettingsChange(e) {
        let input = e.target
        this.settings.handleChange(input)
        console.log("WE IN THIS HOOOE")
        if(input.name === "work") {
            console.log("INPUT VALUE:", input.value)
            this.timer.setWorkTime(input.value)
        } else if(input.name === "break") {
            this.timer.setBreakTime(input.value)
        }
    }
    handlePauseButtonClick() {
        this.timer.pauseTimer()
    }
    handleResetButtonClick() {
        this.timer.resetTimer()
        this.loadingBar.style.width = 0
    }
    handleSkipBreakButtonClick() {
        this.timer.skipBreak = !this.timer.skipBreak
    }
    handleStartButtonClick() {
        console.log("STATE:", this.timer.timersSetInterval, this.timer.isPaused)
        if(!this.timer.timersSetInterval) {
            this.startTimer()
        } else if(this.timer.isPaused) {
            this.timer.unpauseTimer()
        }
    }
}