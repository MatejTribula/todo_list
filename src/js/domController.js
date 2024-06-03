class DomController {

    showProjects(projectArr, container) {

        projectArr.forEach(item => {

            const itemDiv = document.createElement('div')
            itemDiv.classList.add('item', 'project')
            const itemParagraph = document.createElement('p')
            item.type == 'default' ? itemParagraph.innerText = 'All Todos' : itemParagraph.innerText = item.type

            if (item.current) {
                itemDiv.classList.add('current')
            }

            itemDiv.appendChild(itemParagraph)
            container.appendChild(itemDiv)
        })
    }

    showTodos(todoArr, container, projectArr) {

        const currentProject = projectArr.find(project => project.current === true)

        todoArr.forEach(item => {
            console.log('chalos')
            if (currentProject.type == 'default') {
                domCreation(item)
            } else if (item.project === currentProject.type) {
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
            container.appendChild(itemDiv)
        }
    }

    projectCreationPopup() {
        const popupDiv = document.createElement('div')
        popupDiv.classList.add('popup-container')

        const sectionHead = document.createElement('div')
        sectionHead.classList.add('section-head')

        const title = document.createElement('h3')
    }
    createProject() { }

    changeCurrentProject() { }

    removeProject() { }

    todoCreationPopup() { }
    createTodo() { }

    completeTodo() { }

    removeTodo() { }
}



const domController = new DomController()
export default domController