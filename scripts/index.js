import "../styles.css"
import Pomodoro from "./Pomodoro"
import Timer from "./Timer"
import Settings from "./Settings"
import adjustContainerHeight from "./adjustContainerHeight"
import setArrowButtonsWidth from "./setArrowButtonsWidth"
import setSettingsInputHandlers from "./setSettingsInputHandlers"
import setArrowButtonHandlers from "./setArrowButtonHandlers"

const $timer = document.querySelector(".clock__timer")
const $loadingBar = document.querySelector(".loading-bar")
const $startBtn = document.querySelector(".startBtn")
const $startBtnText = document.querySelector(".startBtn span")
const $pauseBtn = document.querySelector(".pauseBtn")
const $skipBreakBtn = document.querySelector(".skipBtn")

const settings = new Settings(10, 5, 5)
const timer = new Timer($timer, $loadingBar, settings)
const pomodoro = new Pomodoro(timer, settings)

setSettingsInputHandlers(pomodoro)
adjustContainerHeight()
setArrowButtonsWidth()
setArrowButtonHandlers(pomodoro)

let btns = [$startBtn, $pauseBtn, $skipBreakBtn].forEach(btn => {
    btn.addEventListener("click", (e) => pomodoro.handleButtonClick(e))
}) 

$(".clock__timer").height($(".clock").height())
$(".clock").fitText(.5)
