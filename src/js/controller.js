import Todo from "./todo.js"
import Project from "./project.js"

const defaultProject = new Project('default')

class Controller {

    constructor() {
        this.todos = this.getTodos() || []
        this.projects = this.getProjects() || [defaultProject]
    }

    createTodo(title, project) {
        return new Todo(title, project)
    }

    addTodo(todo) {
        this.todos.push(todo)
        this.saveTodos()
    }


    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    getTodos() {
        return JSON.parse(localStorage.getItem('todos')) || []
    }


    createProject(type) {
        return new Project(type)
    }

    addProject(project) {
        this.projects.push(project)
        this.saveProjects()
    }

    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    getProjects() {
        return JSON.parse(localStorage.getItem('projects')) || []
    }
}


const controller = new Controller()
export default controller

