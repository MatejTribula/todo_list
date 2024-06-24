import "./main.css"
import controller from "./js/controller.js"
import domController from "./js/domController.js"

// const zdenoo = controller.createTodo('zdeno', 'default')
// controller.addTodo(zdenoo)

// const zdeno = controller.createProject('sport')
// controller.addProject(zdeno)
// const zdeno = controller.createProject('hana')
// controller.addProject(zdeno)

// console.log(controller.getProjects())
// console.log(controller.getTodos())

// console.log(controller.getTodos())

domController.showProjects()
domController.showTodos()

domController.changeCurrentListener()
domController.changeTodoContainerHeading()

domController.createProjectBtn.addEventListener('click', () => domController.itemCreationPopup('Project', 'projectTitle'))
domController.createTodoBtn.addEventListener('click', () => domController.itemCreationPopup('Todo', 'todoTitle'))

// domController.projectDeleteBtn(projectItems)
// domController.changeCurrentListener()



// setInterval(() => console.log(controller.getCurrent()), 1000)
// domController.iteamCreationPopup('Project', 'projectTitle')