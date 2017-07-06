export default class Settings {
    constructor(workInput, workTime, breakInput, breakTime, goalInput, goal) {
        this.workInput = workInput
        this.workValue = workTime
        this.breakInput = breakInput
        this.breakValue = breakTime
        this.goalInput = goalInput
        this.goalValue = goal

        this.workInput.addEventListener("change", (e) => this.handleChange(this.workInput))
        this.breakInput.addEventListener("change", (e) => this.handleChange(this.breakInput))
        this.goalInput.addEventListener("change", (e) => this.handleChange(this.goalInput))

        this.setInputValue(this.workInput, this.workValue)
        this.setInputValue(this.breakInput, this.breakValue)
        this.setInputValue(this.goalInput, this.goalValue)
    }
    handleChange(input) {
        console.log("Manually editing input value:", input, this[input.name + "Value"], input.value)
        this[input.name+"Value"] = input.value
    }
    incrementWork() {
        this.workValue++
        this.setInputValue(this.workInput, this.workValue )
    }
    incrementBreak() {
        this.breakValue++
        this.setInputValue(this.breakInput, this.breakValue )
    }
    incrementGoal() {
        this.goalValue++
        this.setInputValue(this.goalInput, this.goalValue )
    }
    decrementWork() {
        this.workValue--
        this.setInputValue(this.workInput, this.workValue )
    }
    decrementBreak() {
        this.breakValue--
        this.setInputValue(this.breakInput, this.breakValue )
    }
    decrementGoal() {
        this.goalValue--
        this.setInputValue(this.goalInput, this.goalValue )
    }
    setInputValue(input, val) {
        input.value = val
    }
}