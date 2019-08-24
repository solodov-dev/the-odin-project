import { todoFactory } from './logic';
import {
  render,
  renderAddForm,
  renderEditForm,
  renderAddProjectForm,
  renderNav,
  renderMenu,
} from './render';

const todoList = [];
const projects = ['inbox'];
const defaultTodo = todoFactory(
  'A todo (click me!)',
  projects[0],
  '2019-08-19',
  'Todo comments.',
);

todoList.push(defaultTodo);
renderNav(projects[0]);
render(todoList, projects[0]);
renderMenu(projects);

// Add todo listeners
//
// Close add-todo form
document
  .querySelector('#close-add-form')
  .addEventListener('click', renderAddForm);
// Add new todo
document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the page from refreshing
  const newTodo = todoFactory(
    document.forms.addTodo.elements.title.value,
    document.querySelector('#current-project').innerHTML,
    document.forms.addTodo.elements['due-date'].value,
    document.forms.addTodo.elements.comments.value,
  );
  todoList.push(newTodo);
  render(todoList, document.querySelector('#current-project').innerHTML);
  renderAddForm();
});
// Edit todo
document.querySelector('#update').addEventListener('click', (e) => {
  e.preventDefault();
  const { index } = document.querySelector('#edit-todo-window').dataset;
  todoList[index].title = document.forms.editTodo.elements.title.value;
  todoList[index].dueDate = document.forms.editTodo.elements['due-date'].value;
  todoList[index].comment = document.forms.editTodo.elements.comments.value;
  render(todoList, document.querySelector('#current-project').innerHTML);
  renderEditForm();
});

// Event listeners for todo list
document.querySelector('.table').addEventListener('click', (e) => {
  // Toggle comment
  if (e.target.classList.contains('title')) {
    e.target.parentNode.parentNode.querySelector('.todo-comment').classList.toggle('show');
  }
  // Toggle done
  if (e.target.parentNode.classList.contains('checkbox')) {
    todoList[e.target.parentNode.parentNode.dataset.index].toggleDone();
    e.target.parentNode.parentNode
      .querySelector('.title')
      .classList.toggle('done');
  }
  // Toggle important
  if (e.target.classList.contains('exclamation')) {
    todoList[e.target.parentNode.dataset.index].toggleImportant();
    e.target.classList.toggle('important');
  }
  // Delete todo
  if (e.target.classList.contains('delete')) {
    todoList.splice(e.target.parentNode.dataset.index, 1);
    render(todoList, document.querySelector('#current-project').innerHTML);
  }
  // Edit todo
  if (e.target.classList.contains('edit')) {
    renderEditForm(todoList, e.target.parentNode.dataset.index);
  }
  // Open add todo form
  if (e.target.classList.contains('main-btn')) {
    renderAddForm();
  }
});
// Close edit todo form
document
  .querySelector('#close-edit-form')
  .addEventListener('click', renderEditForm);

// Add project listeners
//
// Open form or change project
document.querySelector('.sidebar').addEventListener('click', (e) => {
  if (e.target.classList.contains('add-project')) {
    renderAddProjectForm();
    return;
  }

  if (e.target.classList.contains('menu-item')) {
    if (e.target.parentNode.classList.contains('mobile')) {
      e.target.parentNode.classList.toggle('mobile');
    }
    renderNav(e.target.innerHTML);
    renderMenu(projects);
    render(todoList, document.querySelector('#current-project').innerHTML);
  }

  if (e.target.classList.contains('show-all')) {
    renderNav(e.target.innerHTML);
    renderMenu(projects);
    render(todoList, 'all');
  }
});
// Close add project form
document
  .querySelector('#close-project-form')
  .addEventListener('click', renderAddProjectForm);
// Add project
document.querySelector('#add-project').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the page from refreshing
  projects.push(
    document.forms.addProject.elements['project-title'].value.toLowerCase(),
  );
  renderNav(projects[projects.length - 1]);
  renderMenu(projects);
  render(todoList, document.querySelector('#current-project').innerHTML);
  renderAddProjectForm();
  if (document.querySelector('.mobile')) {
    document.querySelector('.mobile').classList.toggle('mobile');
  }
});
// Delete project
document.querySelector('#delete-project').addEventListener('click', () => {
  if (window.confirm('You will delete this project and all TODOs in it!')) {
    const currentProject = document.querySelector('#current-project');
    // Delete all todos
    projects.splice(projects.indexOf(currentProject.innerHTML), 1);
    renderMenu(projects);
    for (let i = 0; i < todoList.length; i += 1) {
      if (todoList[i].project === currentProject.innerHTML) {
        todoList.splice(i, 1);
        i -= 1;
      }
    }
    if (projects.length > 0) {
      renderNav(projects[projects.length - 1]);
      render(todoList, document.querySelector('#current-project').innerHTML);
    } else {
      render(todoList, 'all');
      renderNav('* show all');
    }
  }
});
// Menu animaitons
document.querySelector('.toggle-menu').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('mobile');
});
