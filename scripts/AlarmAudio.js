let AlarmAudio

if (!AlarmAudio) {
    console.log("I WANT TO SEE MYSELF ONLY ONCE")
    AlarmAudio = new Audio("/assets/electronic_beeping_alarm_clock.mp3")
    AlarmAudio.playbackRate = .5
    AlarmAudio.volume = .5
}

export default AlarmAudio