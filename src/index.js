import "./main.css"
import controller from "./js/controller.js"

controller.addTodo(controller.createTodo('zdeno', 'default'))


console.log(controller.getProjects())
console.log(controller.getTodos())
// console.log(controller.projects)

