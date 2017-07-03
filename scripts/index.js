import "../styles.css"
import formatTime from "./formatTime"

const $timer = document.querySelector(".timer")
const $loadingBar = document.querySelector(".loading-bar")
const start = Date.now()
const STARTING_TIME = 2500      //In seconds

let tick = setInterval(() => {
    let timeElapsed = Math.round((Date.now() - start) / 1000)
    console.log("timeElpased: ", timeElapsed)
    let percentFinished = (timeElapsed / STARTING_TIME) * 100
    if(percentFinished > 100) {
        percentFinished = 100
        clearInterval(tick)
    }
    console.log("percentFinished:", percentFinished)

    let timeRemaining = STARTING_TIME - timeElapsed
    let formattedTimeRemaining = formatTime(timeRemaining)
    $timer.textContent = formattedTimeRemaining
    $loadingBar.style.width = `${percentFinished}%`
}, 1000)