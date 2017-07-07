export default class Pomodoro {
    constructor(timer, settings) {
        this.timer = timer
        this.settings = settings
         
        this.settings.workInput.addEventListener("change", (e) => this.handleSettingsChange(e))
        this.settings.breakInput.addEventListener("change", (e) => this.handleSettingsChange(e))
        this.settings.goalInput.addEventListener("change", (e) => this.handleSettingsChange(e))
    }

    handleButtonClick(e) {
        let button = e.target.textContent.toLowerCase()
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
        this.timer.startingTime = Date.now()

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

            // this.loadingBar.style.width = `${percentFinished}%`
        }, 1000)
    }
    handleTimerFinished() {
        document.querySelector(".startBtn").textContent = "Start"
        document.querySelector(".pauseBtn").textContent = "Reset"

        if(this.timer.state === "break") {
            let rounds = document.querySelector(".rounds")
            let roundsCompleted = rounds.textContent.match(/\d+\//)[0].replace("/", "")
            console.log("ROUNDS COMPLETED:", roundsCompleted + 1)
            rounds.textContent = rounds.textContent.replace(roundsCompleted, `${1 + parseInt(roundsCompleted)}`)
        }

        this.timer.handleTimerFinished()
    }
    handleSettingsChange(e) {
        let input = e.target
        console.log("WE IN THIS HOOOE")
        if(input.name === "work") {
            this.timer.setWorkTime(input.value)
        } else if(input.name === "break") {
            this.timer.setBreakTime(input.value)
        }

        this.settings.handleChange(input)
    }
    handlePauseButtonClick() {
        this.timer.togglePause()
    }
    handleResetButtonClick() {
        this.timer.resetTimer()
    }
    handleSkipBreakButtonClick() {
        this.timer.skipBreak = !this.timer.skipBreak
    }
    handleStartButtonClick() {
        console.log("STATE:", this.timer.timersSetInterval, this.timer.isPaused)
        if(!this.timer.timersSetInterval) {
            this.startTimer()
        } else if(this.timer.isPaused) {
            this.timer.togglePause()
        }
    }
}