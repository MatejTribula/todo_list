import controller from "./controller.js"

class DomController {
    constructor() {
        this.projects = controller.getProjects()
        this.todos = controller.getTodos()

        this.currentProject = this.projects.find(project => project.current === true)

        this.body = document.body
        this.projectItems = document.getElementById('projectContainer').querySelector('.project-items')
        this.todoItems = document.getElementById('todoContainer').querySelector('.todo-items')

        this.todoHeading = document.getElementById('todoContainer').querySelector('.section-head').querySelector('h2')
        // this.todoHeading.innerText = this.currentProject.type

    }



    showProjects() {

        this.projects.forEach(item => {

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

        this.todos.forEach(item => {
            if (this.currentProject.type == 'default') {
                domCreation(item)
            } else if (item.project === this.currentProject.type) {
                domCreation(item)
            }
        })

        function domCreation(item) {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('item', 'todo')

            const labelInput = document.createElement('div')
            labelInput.classList.add('label-input')

            const itemInput = document.createElement('input')
            itemInput.setAttribute("type", "radio")

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
            this.todoItems.appendChild(itemDiv)
        }

        this.projectDeleteBtn()
    }

    iteamCreationPopup(popupType, labelInputAttribute) {
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

    }

    changeCurrentClass(nextProjectTitle) {
        controller.changeCurrent(nextProjectTitle)

        // const projects = controller.getProjects()
        const domProjects = document.querySelectorAll(".project")

        if (nextProjectTitle == "default") {
            nextProjectTitle = "All Todos"
        }

        console.log(nextProjectTitle)

        const oldDomCurrent = document.querySelector('.current')
        const newDomCurrent = Array.from(domProjects).find(domProject => domProject.textContent.includes(nextProjectTitle))

        if (oldDomCurrent !== newDomCurrent) {
            oldDomCurrent.classList.remove('current')
            newDomCurrent.classList.add('current')

            this.todoHeading.innerText = nextProjectTitle
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


    projectDeleteBtn() {
        // console.log('deleteBtn test')
        const oldProjectDeleteBtn = document.getElementById('deleteProjectBtn')
        if (oldProjectDeleteBtn) { oldProjectDeleteBtn.remove() }



        const currentProject = controller.getCurrent()
        // console.log(currentProject, 'joj')

        if (currentProject && currentProject.type !== 'default') {
            const btn = document.createElement('button')
            btn.classList.add('btn', 'btn-warning')
            btn.setAttribute('id', 'deleteProjectBtn')
            btn.innerText = 'Delete Project'

            const trashIcon = document.createElement('i')
            trashIcon.classList.add('fa-solid', 'fa-trash')

            btn.prepend(trashIcon)

            btn.addEventListener('click', controller.removeProject())

            this.todoItems.appendChild(btn)

        }
    }

    // createTodo() { }

    // completeTodo() { }

    // closePopup() { }

}



const domController = new DomController()

export default domController