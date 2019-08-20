import {todoFactory} from "./logic"
import {render, renderAddForm} from "./render"

let todoList = []
let defaultTodo = todoFactory('Example todo', '19.08.2019')

todoList.push(defaultTodo);
render(todoList)

document.querySelector(".main-btn").addEventListener('click', renderAddForm);
document.querySelector("#close-add-form").addEventListener('click', renderAddForm)

document.querySelector("#add").addEventListener('click', function(){
    event.preventDefault(); //Prevent the page from refreshing
    let newTodo = todoFactory(document.forms['addTodo'].elements['title'].value, document.forms['addTodo'].elements['due-date'].value)
    todoList.push(newTodo)
    render(todoList)
    renderAddForm()
})

document.querySelector('table').addEventListener('mouseover', function(e){
    if (e.target.className == 'title') {
        e.target.querySelector('.delete').style.visibility = 'visible'
    }
})
document.querySelector('table').addEventListener('pointerout', function(e){
    if (e.target.className === 'title') {
        e.target.querySelector('.delete').style.visibility = 'hidden'
    }
})
document.querySelector('table').addEventListener('click', function(e){
    if (e.target.className === 'delete') {
        todoList.splice(e.target.parentNode.parentNode.rowIndex, 1)
    }
    render(todoList)
})