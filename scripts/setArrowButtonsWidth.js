export default () => {
    const arrowBtns = Array.from(document.getElementsByClassName("arrows"))
    let maxWidth = arrowBtns.reduce((largestWidth, el) => {
        let width = window.getComputedStyle(el).getPropertyValue("width").replace("px", "")
        console.log("stats:", largestWidth, width)
        return width > largestWidth ? width : largestWidth
    }, 0)

    console.log("BTNS:",arrowBtns, maxWidth)

    arrowBtns.forEach(btn => btn.style.width = maxWidth)
}