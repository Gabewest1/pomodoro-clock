import "../styles.css"
import Timer from "./Timer"

const $timer = document.querySelector(".clock__timer")
const $loadingBar = document.querySelector(".loading-bar")
const $startBtn = document.querySelector(".startBtn")
const $pauseBtn = document.querySelector(".pauseBtn")
const $skipBreakBtn = document.querySelector(".skipBtn")

const timer = new Timer($timer, $loadingBar)
timer.startTimer()
console.log(timer)

$startBtn.addEventListener("click", (e) => {
    console.log("btn clicked!")
    timer.toggleTimer()
})
