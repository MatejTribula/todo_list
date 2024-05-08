// import Todo from "./todo.js"

export default class Project {
    constructor(type) {
        this.type = type
    }

    // createTodo(title) {
    //     return new Todo(title, this.type)
    // }

    showTodos(arr) {
        arr.forEach(todo => {
            if (todo.project === this.type) {
                console.log(todo)
            }
        });
    }
}