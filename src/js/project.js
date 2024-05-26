export default class Project {
    constructor(type) {
        this.type = type
    }

    showTodos(arr) {
        arr.forEach(todo => {
            if (todo.project === this.type) {
                console.log(todo)
            }
        })
    }
}