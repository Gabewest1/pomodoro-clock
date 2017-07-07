export default (Settings) => {
    const $workInput = document.getElementsByName("work")[0]
    const $breakInput = document.getElementsByName("break")[0]
    const $goalInput = document.getElementsByName("goal")[0]

    $workInput.onkeypress = isNumberKey
    $breakInput.onkeypress = isNumberKey
    $goalInput.onkeypress = isNumberKey

    return new Settings($workInput, 5, $breakInput, 10, $goalInput, 5)
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false
    return true
}       
