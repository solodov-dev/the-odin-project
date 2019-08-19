// Main render function. Renders the whole app (todo list)

const render = (todoList) => {
    let container = document.querySelector('#container')
    
    // Clear the table
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // Add elements
    todoList.forEach(element => {
        let row = document.createElement('tr')
        row.classList.add('table-row')
        
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
        title.innerHTML = element.title + `<span class='delete'>delete</span>`
        row.appendChild(title)

        container.appendChild(row)
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

const renderNav = (title) => {
    document.querySelector('nav').innerHTML = title;
}

export {render, renderAddForm}