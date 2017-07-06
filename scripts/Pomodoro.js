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
                this.timer.handleStartButtonClick()
                break
            }
            case "pause": {
                this.timer.handlePauseButtonClick()
                break
            }
            case "skip break": {
                this.timer.handleSkipBreakButtonClick()
                break
            }
            case "reset": {
                this.timer.handleResetButtonClick()
                break
            }
            default:
                return
        }
    }

    handleSettingsChange(e) {
        let input = e.target.name
        if(input === "work") {
            this.timer.setWorkTime(input.value)
        } else if(input === "break") {
            this.timer.setBreakTime(input.value)
        }
    }
}