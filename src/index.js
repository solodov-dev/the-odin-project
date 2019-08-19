import {todoFactory} from "./logic"
import {render, renderAddForm} from "./render"

let todoList = []
let defaultTodo = todoFactory('Example todo', '19.08.2019')

todoList.push(defaultTodo);
render(todoList)

document.querySelector(".main-btn").addEventListener('click', renderAddForm);
document.querySelector("#close-add-form").addEventListener('click', renderAddForm)

document.querySelector("#add").addEventListener('click', function(){
    event.preventDefault();
    let newTodo = todoFactory(document.forms['addTodo'].elements['title'].value, document.forms['addTodo'].elements['due-date'].value)
    todoList.push(newTodo)
    console.log(todoList);
    render(todoList)
    renderAddForm()
})