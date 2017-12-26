let TickAudio

if (!TickAudio) {
    console.log("AYYYYY ONLY ONCE")
    TickAudio = new Audio("/assets/electronic_alarm_clock_beep.mp3")
    TickAudio.volume = .5
}

export default TickAudio
