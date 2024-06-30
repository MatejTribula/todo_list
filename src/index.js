import "./main.css"
import domController from "./js/domController.js"

domController.showProjects()
domController.showTodos()

domController.changeCurrentListener()
domController.changeTodoContainerHeading()

domController.createProjectBtn.addEventListener('click', () => domController.itemCreationPopup('Project', 'projectTitle'))
domController.createTodoBtn.addEventListener('click', () => domController.itemCreationPopup('Todo', 'todoTitle'))

domController.completeTodo()
domController.removeDomTodoListener()