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
            // Add row
            let row = document.createElement('div')
            row.classList.add('table-row')
            row.dataset.index = index

            // Add checkbox
            let checker = document.createElement('div')
            checker.classList.add('todo-data', 'checkbox')
            if (element.done == true){
                checker.innerHTML = '<input type="checkbox" checked>'
            }
            else {
                checker.innerHTML = '<input type="checkbox">'
            }
            row.appendChild(checker)
            
            // Add important !
            let important = document.createElement('div')
            important.classList.add('todo-menu', 'exclamation')
            important.innerHTML = '!'
            if (element.important == true) {
                important.classList.add('important')
            }
            row.appendChild(important)

            // Add todo's title
            let title = document.createElement('div')
            title.classList.add('todo-data', 'title')
            if (element.done == true) {
                title.classList.add('done')
            }
            title.innerHTML = element.title
            
            // Add due date
            let due = document.createElement('div')
            due.innerHTML = 'due: '+ element.dueDate
            due.classList.add('due-date')

            title.appendChild(due)
            row.appendChild(title)

            // Add delete option
            let del = document.createElement('div')
            del.innerHTML = 'delete'
            del.classList.add('todo-menu', 'todo-menu--floater', 'delete')
            row.appendChild(del)
            
            // Add edit option
            let edit = document.createElement('div')
            edit.innerHTML = 'edit'
            edit.classList.add('todo-menu', 'todo-menu--floater', 'edit')
            row.appendChild(edit)
            
            // Add comments section
            let comment = document.createElement('div')
            comment.innerHTML = element.comment
            comment.classList.add('todo-comment')
            row.appendChild(comment)

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

// Redner project form
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