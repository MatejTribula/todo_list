export default class Todo {
    constructor(title, project) {
        this.title = title
        this.project = project
        this.dateCreated = new Date().getDate()
        this.isComplete = false
    }

    completeTodo() {
        this.isComplete = true
    }

}