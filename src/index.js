import "./main.css"
import Todo from "./js/todo.js"
import Project from "./js/project.js"

const todoArr = []



const defaultProject = new Project('default')
// const dnesProject = new Project('dnes')

// const popratTodo = defaultProject.createTodo("zdeno")
// todoArr.push(defaultProject.createTodo("poprat"))
// todoArr.push(new Todo('ucit sa', 'dnes'))
todoArr.push(defaultProject.createTodo("zdeno"))


// console.log(todoArr)
console.log(todoArr)
// defaultProject.showToDos(todoArr)
dnesProject.showTodos(todoArr)

todoArr[0].deleteTodo()
console.log(todoArr)