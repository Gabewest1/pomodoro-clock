export default class Settings {
    constructor(workTime, breakTime, goal) {
        this.workValue = workTime
        this.breakValue = breakTime
        this.goalValue = goal

    }
    handleChange({name, value}) {
        this[name+"Value"] = value
    }
    increment(input) {
        this[input.name+"Value"]++
        input.value = parseInt(input.value)+1
    }
    decrement(input) {
        this[input.name+"Value"]--
        input.value = parseInt(input.value)-1
    }
}