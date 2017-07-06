export default (Settings) => {
    const $workInput = document.getElementsByName("work")[0]
    const $breakInput = document.getElementsByName("break")[0]
    const $goalInput = document.getElementsByName("goal")[0]

    return new Settings($workInput, 5, $breakInput, 10, $goalInput, 5)
}