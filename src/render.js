// Main render function. Renders the whole app (todo list)

const render = (todoList) => {
    let container = document.querySelector('#container')
    todoList.forEach(element => {
        let row = document.createElement('tr')
        
        let checker = document.createElement('td')
        if (element.done == true){
            checker.innerHTML = '<input type="checkbox" name="done" checked>'
        }
        else {
            checker.innerHTML = '<input type="checkbox" name="done">'
        }
        row.appendChild(checker)

        let title = document.createElement('td')
        title.innerHTML = element.title
        row.appendChild(title)

        container.appendChild(row)
    });
}

// Function to render/show the form for adding new todos

const renderAddForm = () => {
    let inputForm = document.querySelector('#add_todo')
    if (inputForm.style.visibility == 'hidden') {
        inputForm.style.visibility = 'visible'
    } else {
        inputForm.style.visibility = 'hidden'
    }
}

export {render, renderAddForm}