import controller from "./controller.js"

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

        // console.log(nextProjectTitle)

        const oldDomCurrent = document.querySelector('.current')
        const newDomCurrent = Array.from(domProjects).find(domProject => domProject.textContent.includes(nextProjectTitle))

        if (oldDomCurrent !== newDomCurrent) {
            oldDomCurrent.classList.remove('current')
            newDomCurrent.classList.add('current')
        }

    }

    // changeCurrentListener() {

    //     const projects = document.querySelectorAll('.project')

    //     projects.forEach(project => {
    //         project.addEventListener('click', () => {
    //             this.changeCurrentClass()
    //         })

    //     });

    //     // console.log('ajoj')

    //     // const projects = document.querySelectorAll('.project')
    //     // projects.forEach(project => {
    //     //     project.addEventListener('click', () => {
    //     //         console.log(project.innerText)
    //     //         controller.changeCurrent(project.innerText)
    //     //         this.changeCurrentClass()
    //     //     })
    //     // })
    // }

    // projectDeleteBtn(container) {
    //     const currentProject = controller.getProjects().find(project => project.current === true)
    //     if (currentProject) {
    //         const btn = document.createElement('button')
    //         btn.classList.add('btn', 'btn-warning')
    //         btn.innerText = 'Delete Project'

    //         const trashIcon = document.createElement('i')
    //         trashIcon.classList.add('fa-solid', 'fa-xmark')

    //         btn.prepend(trashIcon)

    //         container.appendChild(btn)
    //     }
    // }

    // createTodo() { }

    // completeTodo() { }

    // closePopup() { }

}



const domController = new DomController()

export default domController