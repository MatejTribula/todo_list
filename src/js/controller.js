import Todo from "./todo.js"

class Controller {

    constructor() {
        this.todos = this.getTodos() || []
    }

    createTodo(title, project) {
        return new Todo(title, project)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }


    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return JSON.parse(localStorage.getItem('todos'))
    }
}


const controller = new Controller()
export default controller