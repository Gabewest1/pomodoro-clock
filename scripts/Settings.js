export default class Settings {
    constructor(workTime, breakTime, goal) {
        this.workValue = workTime
        this.breakValue = breakTime
        this.goalValue = goal

    }
    handleChange({name, value}) {
        console.log("AYYY")
        this[name+"Value"] = value
    }
    increment(input) {
        console.log("increment",input)
        this[input.name+"Value"]++
        input.value = parseInt(input.value)+1
    }
    decrement(input) {
        console.log("decrement",input)
        this[input.name+"Value"]--
        input.value = parseInt(input.value)-1
    }
}