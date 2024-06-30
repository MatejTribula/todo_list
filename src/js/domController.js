import controller from "./controller.js"

class DomController {
    constructor() {
        this.projects = controller.getProjects()
        this.todos = controller.getTodos()

        this.currentProject = this.projects.find(project => project.current === true)

        this.body = document.body
        this.projectItems = document.getElementById('projectContainer').querySelector('.project-items')
        this.todoItems = document.getElementById('todoContainer').querySelector('.todo-items')

        this.todoContainerHeading = document.getElementById('todoContainer').querySelector('.section-head').querySelector('h2')
        this.createProjectBtn = document.getElementById('createProjectBtn')
        this.createTodoBtn = document.getElementById('createTodoBtn')
    }



    showProjects() {

        controller.getProjects().forEach(item => {

            const itemDiv = document.createElement('div')
            itemDiv.classList.add('item', 'project')
            const itemParagraph = document.createElement('p')
            item.type == 'default' ? itemParagraph.innerText = 'All Todos' : itemParagraph.innerText = item.type

            if (item.current) {
                itemDiv.classList.add('current')
            }

            itemDiv.appendChild(itemParagraph)
            this.projectItems.appendChild(itemDiv)
        })

    }

    showTodos() {
        const todoItemsContainer = this.todoItems
        const current = controller.getCurrent()

        todoItemsContainer.innerHTML = ''

        controller.getTodos().forEach(item => {
            if (current.type == 'default') {
                domCreation(item)
            } else if (item.project === current.type) {
                domCreation(item)
            }
        })

        function domCreation(item) {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('item', 'todo')

            const labelInput = document.createElement('div')
            labelInput.classList.add('label-input')

            const itemInput = document.createElement('input')
            itemInput.setAttribute("type", "checkbox")

            if (item.isComplete) {
                itemInput.checked = true
            } else {
                itemInput.checked = false
            }

            const itemLabel = document.createElement('label')
            itemLabel.innerText = item.title

            const closeBtn = document.createElement('button')
            closeBtn.classList.add('btn-clean', 'btn-close')


            const closeIcon = document.createElement('i')
            closeIcon.classList.add('fa-solid', 'fa-xmark')

            closeBtn.appendChild(closeIcon)

            labelInput.appendChild(itemInput)
            labelInput.appendChild(itemLabel)
            itemDiv.appendChild(labelInput)
            itemDiv.appendChild(closeBtn)
            todoItemsContainer.appendChild(itemDiv)
        }

        this.projectDeleteBtn()
        this.removeDomTodoListener()
    }

    itemCreationPopup(popupType, labelInputAttribute) {
        console.log(popupCounter)
        if (popupCounter === 0) {
            const popupDiv = document.createElement('div')
            popupDiv.classList.add('popup-container')

            const sectionHead = document.createElement('div')
            sectionHead.classList.add('section-head')

            const title = document.createElement('h3')
            title.innerText = `New ${popupType}`

            const closeBtn = document.createElement('button')
            closeBtn.classList.add('btn-clean', 'btn-close')

            const closeIcon = document.createElement('i')
            closeIcon.classList.add('fa-solid', 'fa-xmark')

            const form = document.createElement('form')
            form.setAttribute('method', 'POST')

            const labelInput = document.createElement('div')
            labelInput.classList.add('label-input')

            const label = document.createElement('label')
            label.setAttribute('for', labelInputAttribute)
            label.innerText = 'Title'

            const input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('id', labelInputAttribute)
            input.setAttribute('placeholder', 'Type here...')


            const submitBtn = document.createElement('button')
            submitBtn.setAttribute('type', 'submit')
            submitBtn.classList.add('btn', 'btn-regular')
            submitBtn.innerText = `Create New ${popupType}`

            const plusIcon = document.createElement('i')
            plusIcon.classList.add('fa-solid', 'fa-plus')
            submitBtn.prepend(plusIcon)

            document.body.appendChild(popupDiv)

            popupDiv.appendChild(sectionHead)

            sectionHead.appendChild(title)
            sectionHead.appendChild(closeBtn)
            closeBtn.appendChild(closeIcon)
            popupDiv.appendChild(form)
            form.appendChild(labelInput)
            labelInput.appendChild(label)
            labelInput.appendChild(input)
            form.appendChild(submitBtn)

            closeBtn.addEventListener('click', () => {
                popupCounter--
                popupDiv.remove()
            })
            submitBtn.addEventListener('click', (e) => {
                // console.log(popupType)
                e.preventDefault()
                const inputValue = input.value
                if (popupType == 'Project') {
                    // console.log(inputValue)
                    const newProject = controller.createProject(inputValue)
                    controller.addProject(newProject)
                    this.projectItems.innerHTML = ''
                    this.showProjects()
                    this.changeCurrentListener()
                } else {
                    const current = controller.getCurrent()
                    const newTodo = controller.createTodo(inputValue, current.type)
                    // console.log(newTodo)
                    controller.addTodo(newTodo)
                    this.todoItems.innerHTML = ''
                    this.showTodos()
                }
                popupDiv.remove()

                popupCounter = 0
            }
            )
            popupCounter++
        }
    }

    changeCurrentClass(nextProjectTitle) {
        controller.changeCurrent(nextProjectTitle)

        // const projects = controller.getProjects()
        const domProjects = document.querySelectorAll(".project")

        if (nextProjectTitle == "default") {
            nextProjectTitle = "All Todos"
        }

        // console.log(nextProjectTitle)

        const oldDomCurrent = document.querySelector('.current')
        const newDomCurrent = Array.from(domProjects).find(domProject => domProject.textContent.includes(nextProjectTitle))

        if (oldDomCurrent !== newDomCurrent) {
            oldDomCurrent.classList.remove('current')
            newDomCurrent.classList.add('current')

            this.changeTodoContainerHeading()
        }
    }

    changeCurrentListener() {
        const domProjects = document.querySelectorAll('.project')


        domProjects.forEach(domProject => {
            domProject.addEventListener('click', () => {
                // console.log(domProject.innerText, 'changecurrent listener')
                // console.log(controller.getProjects())
                let projectInnerText = domProject.innerText

                if (projectInnerText === "All Todos") {
                    projectInnerText = 'default'
                }
                // console.log(projectInnerText)
                this.changeCurrentClass(projectInnerText)
                this.showTodos()

            })
        })

    }


    changeTodoContainerHeading() {
        let newProjectTitle = controller.getCurrent().type

        newProjectTitle === 'default' ? newProjectTitle = 'All Todos' : newProjectTitle
        this.todoContainerHeading.innerText = newProjectTitle
    }


    projectDeleteBtn() {
        // console.log('deleteBtn test')
        const oldProjectDeleteBtn = document.getElementById('deleteProjectBtn')
        if (oldProjectDeleteBtn) { oldProjectDeleteBtn.remove() }

        const currentProject = controller.getCurrent()
        if (currentProject && currentProject.type !== 'default') {
            const btn = document.createElement('button')
            btn.classList.add('btn', 'btn-warning')
            btn.setAttribute('id', 'deleteProjectBtn')
            btn.innerText = 'Delete Project'

            const trashIcon = document.createElement('i')
            trashIcon.classList.add('fa-solid', 'fa-trash')

            btn.prepend(trashIcon)

            btn.addEventListener('click', () => {
                controller.removeProject(controller.getCurrent().type)
                this.removeDomProject()
            })

            this.todoItems.appendChild(btn)
        }
    }

    removeDomProject() {
        const currentDom = document.querySelector('.current')
        currentDom.remove()
    }

    createTodo(title) {
        controller.createTodo(title, this.currentProject)
        this.todoItems.innerHTML = ''
        this.showTodos()
    }

    completeTodo() {
        const domTodos = this.todoItems.querySelectorAll('.item')


        domTodos.forEach(domTodo => {
            const label = domTodo.querySelector('label')
            const todoTitle = label.innerText
            const input = domTodo.querySelector('input')



            input.addEventListener('click', () => {
                if (input.checked === false) {
                    controller.completeTodo(todoTitle, false)
                } else {
                    controller.completeTodo(todoTitle, true)
                }

            })


        });

    }
    removeDomTodo(label) {
        controller.removeTodo(label.innerText)

        this.todoItems.innerHTML = ''
        this.showTodos()
    }

    removeDomTodoListener() {
        const domTodos = document.querySelectorAll('.todo')

        domTodos.forEach(todo => {
            const label = todo.querySelector('label')
            const btn = todo.querySelector('.btn-close')
            // console.log(todo, btn)
            btn.addEventListener('click', () => this.removeDomTodo(label))
            // btn.addEventListener('click', () => console.log('joj'))
        })
    }


}



const domController = new DomController()

export default domController

let popupCounter = 0