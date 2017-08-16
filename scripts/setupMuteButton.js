import $ from "jquery"
import TickAudio from "./TickAudio"
import AlarmAudio from "./AlarmAudio"

export default () => {
    let $muteButton = $("#muteBtn")

    $muteButton.click(e => {
        let isMuted = $muteButton.attr("src").endsWith("--muted.png")

        if (isMuted) {
            TickAudio.volume = .5
            AlarmAudio.volume = .5
            $muteButton.attr("src", "/assets/soundIcon.png")
        } else {
            TickAudio.volume = 0
            AlarmAudio.volume = 0
            $muteButton.attr("src", "/assets/soundIcon--muted.png")
        }
    })
}
