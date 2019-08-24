// Main render function. Renders the todoList for a project
const render = (todoList, project) => {
  const container = document.querySelector('.table');

  // Clear the table
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (project !== 'all') {
    const addBtn = document.createElement('a');
    addBtn.classList.add('main-btn');
    addBtn.innerHTML = '+';
    container.appendChild(addBtn);
  }

  // Add elements
  let index = 0;
  todoList.forEach((element) => {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    if (element.project === project || project === 'all') {
      // Add row
      const row = document.createElement('div');
      row.classList.add('table-row');
      row.dataset.index = index;

      // Add checkbox
      const checker = document.createElement('div');
      checker.classList.add('todo-data', 'checkbox');
      if (element.done === true) {
        checker.innerHTML = '<input type="checkbox" checked>';
      } else {
        checker.innerHTML = '<input type="checkbox">';
      }
      row.appendChild(checker);

      // Add important !
      const important = document.createElement('div');
      important.classList.add('todo-menu', 'exclamation', 'material-icons');
      important.innerHTML = 'assignment_late';
      if (element.important === true) {
        important.classList.add('important');
      }
      row.appendChild(important);

      // Add todo's title
      const title = document.createElement('div');
      title.classList.add('todo-data', 'title');
      if (element.done === true) {
        title.classList.add('done');
      }
      title.innerHTML = element.title;

      // Add due date
      const due = document.createElement('div');
      due.innerHTML = `due: ${element.dueDate}`;
      due.classList.add('due-date');

      title.appendChild(due);
      row.appendChild(title);

      // Add edit option
      const edit = document.createElement('div');
      edit.innerHTML = 'mode_edit';
      edit.classList.add('todo-menu', 'todo-menu--floater', 'edit', 'material-icons');
      row.appendChild(edit);

      // Add delete option
      const del = document.createElement('div');
      del.innerHTML = 'delete';
      del.classList.add('todo-menu', 'todo-menu--floater', 'delete', 'material-icons');
      row.appendChild(del);


      rowContainer.appendChild(row);
      // Add comments section
      const comment = document.createElement('div');
      comment.innerHTML = element.comment;
      comment.classList.add('todo-comment');
      rowContainer.appendChild(comment);

      container.appendChild(rowContainer);
    }
    index += 1;
  });
};

// Function to render/show the form for adding new todos
const renderAddForm = () => {
  const inputForm = document.querySelector('#add-todo-window');
  if (inputForm.style.visibility === 'hidden') {
    inputForm.style.visibility = 'visible';
  } else {
    inputForm.style.visibility = 'hidden';
  }
};

// Redner project form
const renderAddProjectForm = () => {
  const inputForm = document.querySelector('#add-project-window');
  if (inputForm.style.visibility === 'hidden') {
    inputForm.style.visibility = 'visible';
  } else {
    inputForm.style.visibility = 'hidden';
  }
};

// Render navigation header
const renderNav = (project) => {
  const currentProject = document.querySelector('#current-project');
  currentProject.innerHTML = project;

  const deleteProject = document.querySelector('#delete-project');

  if (project !== '* show all') {
    deleteProject.innerHTML = 'delete';
    deleteProject.classList.add('material-icons');
  } else {
    deleteProject.innerHTML = '';
  }
};

// Render projects menu
const renderMenu = (projects) => {
  const menu = document.querySelector('.sidebar');

  // Clean menu list before refreshing
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }

  const allProjects = document.createElement('a');
  allProjects.innerHTML = '* show all';
  allProjects.classList.add('show-all');
  menu.appendChild(allProjects);

  const addProject = document.createElement('a');
  addProject.innerHTML = '+ add project';
  addProject.classList.add('menu-item', 'add-project');
  menu.appendChild(addProject);

  projects.forEach((project) => {
    const menuItem = document.createElement('a');
    menuItem.innerHTML = project;
    menuItem.classList.add('menu-item', 'menu-project');
    menu.appendChild(menuItem);
  });
};

const renderEditForm = (todoList, index) => {
  const editForm = document.querySelector('#edit-todo-window');
  editForm.dataset.index = index;
  if (editForm.style.visibility === 'hidden') {
    editForm.style.visibility = 'visible';
    document.forms.editTodo.elements.title.value = todoList[index].title;
    document.forms.editTodo.elements['due-date'].value = todoList[index].dueDate;
    document.forms.editTodo.elements.comments.value = todoList[index].comment;
  } else {
    editForm.style.visibility = 'hidden';
  }
};

export {
  render, renderAddForm, renderAddProjectForm, renderEditForm, renderNav, renderMenu,
};
