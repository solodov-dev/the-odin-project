let myLibrary = [];
let titles = ['Title', 'Author', 'Pages', 'Status', 'Remove'];
let formIsOpen = false;

let theHobbit = new Book("The Hobbit", "J.R.R. Tolien", 295, "not read");
let fiftyShadesOfGray = new Book("50 Shades of Gray","E.L.James",116,"not read");
let theMagus = new Book("The Magus", "J.Fowles", 700, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(fiftyShadesOfGray);
addBookToLibrary(theMagus);

let container = document.querySelector("#container");
let addFormBtn = document.querySelector("#addform");
let form = document.querySelector("form");
let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputPages = document.querySelector("#pages");
let inputRead = document.querySelector("select");

render(myLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function render(bookList) {
  //Clear existing render
  clearRender();
  //Add table header
  let row = document.createElement("tr");
  row.className = "row";
  for (title of titles) {
    let th = document.createElement("th");
    row.appendChild(th).innerHTML = title;
  }
  container.appendChild(row);
  
  //Add books
  bookList.forEach(function(book, index) {
    //Add a row with data index
    let row = document.createElement("tr");
    row.className = "row";
    row.setAttribute("data-index", index);

    //Add data columns
    for (let property in book) {
      if (book.hasOwnProperty(property)) {
        let dataItem = document.createElement("td");
        if (property == 'status') {
          dataItem.style.textAlign = 'center';
          dataItem.innerHTML = `<button class='read' onclick='toggleRead(this)'>${book[property]}</button>`;
        } else {
          dataItem.innerHTML = book[property];
        }
        
        row.appendChild(dataItem);
      }
    }

    //Add remove column
    let deleteItem = document.createElement("td");
    deleteItem.style.textAlign = 'center';
    deleteItem.innerHTML = `<button class='remove' onclick='removeBook(this)'>×</button></button>`;
    row.appendChild(deleteItem);

    container.appendChild(row);
  });
}

function showForm() {
  if (formIsOpen) {
    form.style.display = "none";
    addFormBtn.style.backgroundColor = "#5e4cd3";
    addFormBtn.innerHTML = '+'
    formIsOpen = false;
  } else {
    form.style.display = "block";
    addFormBtn.style.backgroundColor = "#f14640";
    addFormBtn.innerHTML = '×';
    formIsOpen = true;
  }
}

function clearRender() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function newBook() {
  let item = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.value
  );

  addBookToLibrary(item);
  render(myLibrary);
}

function removeBook(book) {
  myLibrary.splice(book.parentNode.parentNode.dataset.index,1);
  render(myLibrary);
}

function toggleRead(button) {
  if (button.innerHTML == 'read') {
    button.innerHTML = 'not read';
    myLibrary[button.parentNode.parentNode.dataset.index].status = 'not read';
  } else {
    button.innerHTML = 'read';
    myLibrary[button.parentNode.parentNode.dataset.index].status = 'read';
  }
}

//TODO add form validation and prettify