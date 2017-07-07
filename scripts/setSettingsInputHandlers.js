export default (pomodoro) => {

    const $workInput = document.getElementsByName("work")[0]
    const $breakInput = document.getElementsByName("break")[0]
    const $goalInput = document.getElementsByName("goal")[0]

    $workInput.addEventListener("change", (e) => pomodoro.handleSettingsChange(e))
    $breakInput.addEventListener("change", (e) => pomodoro.handleSettingsChange(e))
    $goalInput.addEventListener("change", (e) => pomodoro.handleSettingsChange(e))

    $workInput.onkeypress = isNumberKey
    $breakInput.onkeypress = isNumberKey
    $goalInput.onkeypress = isNumberKey

    $workInput.value = pomodoro.settings.workValue
    $breakInput.value = pomodoro.settings.breakValue
    $goalInput.value = pomodoro.settings.goalValue
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false
    return true
}       
