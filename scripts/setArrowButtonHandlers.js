export default ({settings, timer}) => { 
    console.log("JKLFDJS:L", settings, timer)
    const $arrowButtons = document.querySelectorAll(".arrow__wrapper")

    Array.from($arrowButtons).forEach(btn => btn.addEventListener("click", (e) => {
        let increaseValue = btn.firstElementChild.classList.contains("up")
        let input = btn.parentElement.parentElement.nextElementSibling

        if(increaseValue) {
            settings.increment(input)
            timer.setWorkTime()  
            timer.setBreakTime()
        } else {
            settings.decrement(input)
            timer.setWorkTime() 
            timer.setBreakTime()
        }

        if(input.name === "goal") {
            let rounds = document.querySelector(".rounds")
            let text = rounds.textContent
            let index = text.indexOf("/")+1
            rounds.textContent = text.substring(0, index) + input.value
        }
    }))
}