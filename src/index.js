import "./main.css"

const todoArr = []

class Project {
    constructor(type) {
        this.type = type
    }

    createTodo(title) {
        return new Todo(title, this.type)
    }

    showTodos(arr) {
        arr.forEach(todo => {
            if (todo.project === this.type) {
                console.log(todo)
            }
        });
    }

    deleteProject() {
        delete this
    }
}

class Todo {
    constructor(title, project) {
        this.title = title
        this.project = project
        this.dateCreated = new Date().getDate()
    }

    deleteTodo() {
        delete this
    }
}

const defaultProject = new Project('default')
const dnesProject = new Project('dnes')

// const popratTodo = defaultProject.createTodo("zdeno")
// todoArr.push(defaultProject.createTodo("poprat"))
// todoArr.push(new Todo('ucit sa', 'dnes'))
// todoArr.push(defaultProject.createTodo("zdeno"))


// console.log(todoArr)
console.log(todoArr)
// defaultProject.showToDos(todoArr)
dnesProject.showTodos(todoArr)
