export default () => {
    console.log("adjusting height")
    const container = document.querySelector(".container")
    const distanceFromTopOfWindow = getSiblings(container).reduce((sum, next) => sum + getHeight(next), 0)
    console.log("height:", distanceFromTopOfWindow)
    container.style.height = window.innerHeight - distanceFromTopOfWindow
}

function getSiblings(el, siblings = []) {
    let currentSibling = el.previousElementSibling
    console.log("SIBLING:", currentSibling)
    if(!currentSibling) {
        return siblings
    } else {
        siblings.push(currentSibling)
        return getSiblings(currentSibling, siblings)
    }
}

function getHeight(el) {
    return parseInt(
        window.getComputedStyle(el, null).getPropertyValue("height").match(/^\d+/)[0]
    )
}