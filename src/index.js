import {todoFactory} from "./logic"
import {render, renderAddForm, renderAddProjectForm, renderNav, renderMenu} from "./render"

let todoList = []
let projects = ['inbox',]
let defaultTodo = todoFactory('Example todo', projects[0], '2019-08-19', 'You can add your comments here.')

todoList.push(defaultTodo)
renderNav(projects[0])
render(todoList, projects[0])
renderMenu(projects)

// Add todo listeners
//
// Open form
document.querySelector(".main-btn").addEventListener('click', renderAddForm)
// Close form
document.querySelector("#close-add-form").addEventListener('click', renderAddForm)
// Add todo
document.querySelector("#add").addEventListener('click', function(){
    event.preventDefault(); //Prevent the page from refreshing
    let newTodo = todoFactory(document.forms['addTodo'].elements['title'].value, 
                            document.querySelector('#current-project').innerHTML, 
                            document.forms['addTodo'].elements['due-date'].value, 
                            document.forms['addTodo'].elements['comments'].value)
    todoList.push(newTodo)
    render(todoList, document.querySelector('#current-project').innerHTML)
    renderAddForm()
})

// Event listeners for todos
document.querySelector('.table').addEventListener('click', function(e){
    // Toggle comment
    if (e.target.classList.contains('title')) {
        e.target.parentNode.querySelector('.todo-comment').classList.toggle('show')
    }
    // Toggle done
    if (e.target.parentNode.classList.contains('checkbox')) {
        todoList[e.target.parentNode.parentNode.dataset.index].toggleDone()
        e.target.parentNode.parentNode.querySelector('.title').classList.toggle('done')
    }
    // Toggle important
    if (e.target.classList.contains('exclamation')) {
        todoList[e.target.parentNode.dataset.index].toggleImportant()
        e.target.classList.toggle('important')
    }
    // Delete todo
    if (e.target.classList.contains('delete')) {
        todoList.splice(e.target.parentNode.dataset.index, 1)
        render(todoList, document.querySelector('#current-project').innerHTML)
    }
    // Edit todo
})

// Add project listeners
// 
// Open form or change project
document.querySelector(".dropdown-content").addEventListener('click', function(e){
    if (e.target.classList.contains('add-project')) {
        renderAddProjectForm()
        return
    }

    if (e.target.classList.contains('menu-item')) {
        renderNav(e.target.innerHTML)
        renderMenu(projects)
        render(todoList, document.querySelector('#current-project').innerHTML)
        return
    }
})
// Close form
document.querySelector("#close-project-form").addEventListener('click', renderAddProjectForm)
// Add project
document.querySelector("#add-project").addEventListener('click', function(){
    event.preventDefault(); //Prevent the page from refreshing
    projects.push(document.forms['addProject'].elements['project-title'].value.toLowerCase())
    renderNav(projects[projects.length-1])
    renderMenu(projects)
    render(todoList, document.querySelector('#current-project').innerHTML)
    renderAddProjectForm()
})
