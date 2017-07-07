export default class Settings {
    constructor(workInput, workTime, breakInput, breakTime, goalInput, goal) {
        this.workInput = workInput
        this.workValue = workTime
        this.breakInput = breakInput
        this.breakValue = breakTime
        this.goalInput = goalInput
        this.goalValue = goal

        this.setInputValue(this.workInput, this.workValue)
        this.setInputValue(this.breakInput, this.breakValue)
        this.setInputValue(this.goalInput, this.goalValue)
    }
    handleChange(input) {
        console.log("Manually editing input value:", input, this[input.name + "Value"], input.value)
        this[input.name+"Value"] = input.value
    }
    increment(input) {
        console.log("increment",input)
        this[input.name+"Value"]++
        this.setInputValue(input, this[input.name+"Value"])
    }
    decrement(input) {
        console.log("decrement",input)
        this[input.name+"Value"]--
        this.setInputValue(input, this[input.name+"Value"])
    }
    setInputValue(input, val) {
        console.log("Setting input value:", input.value, val)
        input.value = val
    }
}