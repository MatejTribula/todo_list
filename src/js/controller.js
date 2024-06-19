import Todo from "./todo.js"
import Project from "./project.js"

const defaultProject = new Project('default')
defaultProject.current = true



class Controller {
    constructor() {
        this.todos = this.getTodos() || []
        this.projects = this.getProjects()

        if (this.projects.length === 0) {
            this.projects.push(defaultProject)
            this.saveProjects()
        }
    }

    createTodo(title, project) {
        let match = false

        const todos = this.getTodos()
        if (todos) {

            todos.forEach(todoItem => {
                if (todoItem.title == title) {
                    match = true
                }
            })
        }


        if (!match) {
            return new Todo(title, project)
        } else {
            return null
        }

    }

    removeTodo(todoTitle) {
        const toRemoveTodo = this.todos.find(todo => todo.title == todoTitle)
        const toRemoveIndex = this.todos.indexOf(toRemoveTodo)

        if (toRemoveIndex !== -1) {
            this.todos.splice(toRemoveIndex, 1)
        }

        this.saveTodos()
    }

    addTodo(todo) {
        if (todo) {
            this.todos.push(todo)
            this.saveTodos()
        }
    }


    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    getTodos() {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    createProject(title) {
        let match = false
        const projects = this.getProjects()
        if (projects) {

            projects.forEach(projectItem => {
                if (projectItem.type == title) {
                    match = true
                }
            })
        }

        if (!match) {
            return new Project(title)
        } else {
            return null
        }

    }

    removeProject(projectTitle) {
        const toRemoveProject = this.projects.find(project => project.title == projectTitle)
        const toRemoveIndex = this.todos.indexOf(toRemoveProject)

        if (toRemoveIndex !== -1 && projectTitle != 'default') {
            this.project.splice(toRemoveIndex, 1)
        }

        this.saveProjects()
    }

    addProject(project) {
        if (project) {
            this.projects.push(project)
            this.saveProjects()
        }
    }

    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    getProjects() {
        return JSON.parse(localStorage.getItem('projects')) || []
    }

    changeCurrent(newCurrentName) {
        if (newCurrentName = "All Todos") {
            newCurrentName = 'default'
        }
        // console.log(newCurrentName)
        const currentProject = this.projects.find(project => project.current === true)
        const newCurrentProject = this.projects.find(project => project.type === newCurrentName)

        // console.log(currentProject, newCurrentProject)
        if (currentProject !== newCurrentProject) {
            currentProject.current = false
            newCurrentProject.current = true
        }
    }

}


const controller = new Controller()
export default controller

