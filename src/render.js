// Main render function. Renders the todoList for a project

const render = (todoList, project) => {
    let container = document.querySelector('#container')
    
    // Clear the table
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // Add elements
    let index = 0
    todoList.forEach(element => {
        if (element.project == project){   
            let row = document.createElement('tr')
            row.classList.add('table-row')
            row.dataset.index = index

            let checker = document.createElement('td')
            checker.classList.add('done')
            if (element.done == true){
                checker.innerHTML = '<input type="checkbox" name="done" checked>'
            }
            else {
                checker.innerHTML = '<input type="checkbox" name="done">'
            }
            row.appendChild(checker)

            let title = document.createElement('td')
            title.classList.add('title')
            title.innerHTML = element.title + `<span class='edit-todo-menu delete'>delete</span>`
            row.appendChild(title)

            container.appendChild(row)
        }
        index++
    });
}

// Function to render/show the form for adding new todos

const renderAddForm = () => {
    let inputForm = document.querySelector('#add-todo-window')
    if (inputForm.style.visibility == 'hidden') {
        inputForm.style.visibility = 'visible'
    } else {
        inputForm.style.visibility = 'hidden'
    }
}

const renderAddProjectForm = () => {
    let inputForm = document.querySelector('#add-project-window')
    if (inputForm.style.visibility == 'hidden') {
        inputForm.style.visibility = 'visible'
    } else {
        inputForm.style.visibility = 'hidden'
    }
}

// Render navigation header

const renderNav = (project) => {
    document.querySelector('#current-project').innerHTML = project
}

// Render projects menu

const renderMenu = (projects) => {
    let menu = document.querySelector('.dropdown-content')
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild)
    }
    projects.forEach(project => {
        if (document.querySelector('#current-project').innerHTML == project) {
            return
        }
        let menuItem = document.createElement('a')
        menuItem.innerHTML = project
        menuItem.classList.add('menu-item')
        menu.appendChild(menuItem)
    })

    let addProject = document.createElement('a')
    addProject.innerHTML = '+ Add Project'
    addProject.classList.add('menu-item', 'add-project')
    menu.appendChild(addProject)
}

export {render, renderAddForm, renderAddProjectForm, renderNav, renderMenu}