import {todoFactory} from "./logic"
import {render, renderAddForm} from "./render"

let todoList = []
let container  = document.querySelector('#container')
let newTodo = todoFactory('Example todo', '19.08.2019')
newTodo.getDone()

todoList.push(newTodo);
render(todoList)

document.querySelector(".main-btn").addEventListener('click', renderAddForm);
document.querySelector("#close-add-form").addEventListener('click', renderAddForm)