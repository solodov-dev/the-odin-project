import {todoFactory} from "./logic"
import {render, renderAddForm, renderAddProjectForm, renderNav, renderMenu} from "./render"

let todoList = []
let projects = ['inbox',]
let defaultTodo = todoFactory('Example todo', projects[0], '19.08.2019', 'You can add your comments here.')

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
    let newTodo = todoFactory(document.forms['addTodo'].elements['title'].value, document.querySelector('#current-project').innerHTML, document.forms['addTodo'].elements['due-date'].value)
    todoList.push(newTodo)
    render(todoList, document.querySelector('#current-project').innerHTML)
    renderAddForm()
})
// Delete todo
document.querySelector('#container').addEventListener('click', function(e){
    if (e.target.classList.contains('delete')) {
        todoList.splice(e.target.parentNode.dataset.index, 1)
        render(todoList, document.querySelector('#current-project').innerHTML)
    }
})
// Show comment
document.querySelector('.table').addEventListener('click', function(e){
    if (e.target.classList.contains('title')) {
        e.target.parentNode.querySelector('.todo-comment').classList.toggle('show')
    }
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
