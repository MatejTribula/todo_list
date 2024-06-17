import "./main.css"
import controller from "./js/controller.js"
import domController from "./js/domController.js"

// const zdenoo = controller.createTodo('zdeno', 'default')
// controller.addTodo(zdenoo)

// const zdeno = controller.createProject('sport')
// controller.addProject(zdeno)

// controller.removeTodo('zdeno')


console.log(controller.getProjects())
// console.log(controller.getTodos())
// console.log(controller.projects)

const body = document.body
const projectItems = document.getElementById('projectContainer').querySelector('.project-items')
const todoItems = document.getElementById('todoContainer').querySelector('.todo-items')


const currentProject = document.querySelector('.current')






domController.showProjects(controller.getProjects(), projectItems, currentProject)
domController.showTodos(controller.getTodos(), todoItems, controller.getProjects())

// domController.projectDeleteBtn(projectItems)
// domController.changeCurrentListener()

domController.changeCurrentClass('sport')

// domController.iteamCreationPopup('Project', 'projectTitle')