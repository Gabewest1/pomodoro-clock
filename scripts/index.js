import "../styles.css"
import Pomodoro from "./Pomodoro"
import Timer from "./Timer"
import Settings from "./Settings"
import adjustContainerHeight from "./adjustContainerHeight"
import setArrowButtonsWidth from "./setArrowButtonsWidth"
import setSettingsButtonHandlers from "./setSettingsButtonHandlers"

const $timer = document.querySelector(".clock__timer")
const $loadingBar = document.querySelector(".loading-bar")
const $startBtn = document.querySelector(".startBtn")
const $pauseBtn = document.querySelector(".pauseBtn")
const $skipBreakBtn = document.querySelector(".skipBtn")

adjustContainerHeight()
setArrowButtonsWidth()

const settings = setSettingsButtonHandlers(Settings)
const timer = new Timer($timer, $loadingBar, settings)
const pomodoro = new Pomodoro(timer, settings)

const toggleButtonText = (option1, option2) => (btn) => {
    if(btn.textContent === option1) {
        btn.textContent = option2
    } else {
        btn.textContent = option1
    }
}
const toggleStartText = toggleButtonText("Start", "")
const togglePauseText = toggleButtonText("Reset", "Pause")

let btns = [$startBtn, $pauseBtn, $skipBreakBtn].forEach(btn => {
    console.log("Attaching button handlers")
    btn.addEventListener("click", (e) => pomodoro.handleButtonClick(e))
}) 

$startBtn.addEventListener("click", () => {
    if($startBtn.textContent === "")
        return

    toggleStartText($startBtn)
    togglePauseText($pauseBtn)
})

$pauseBtn.addEventListener("click", () => {
    if($pauseBtn.textContent === "Pause") {
        toggleStartText($startBtn)
        togglePauseText($pauseBtn)
    }
})

