let myLibrary = [];
let titles = ['Title', 'Author', 'Pages', 'Status', 'Remove'];
let formIsOpen = false;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function toggleRead() {
  alert('fuck you!');
}

function render(bookList) {
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
    let row = document.createElement("tr");
    row.className = "row";
    row.setAttribute("data-index", index);
    for (let property in book) {
      if (book.hasOwnProperty(property)) {
        let dataItem = document.createElement("td");
        if (property == 'status') {
          dataItem.innerHTML = (`<button onclick='toggleRead()'>${book[property]}</button>`);
        } else {
          dataItem.innerHTML = book[property];
        }
        
        row.appendChild(dataItem);
      }
    }
    let deleteItem = document.createElement("button");
    deleteItem.innerHTML = '×';
    deleteItem.onclick = toggleRead;
    row.appendChild(deleteItem);

    container.appendChild(row);
  });
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolien", 295, "not read");
let fiftyShadesOfGray = new Book(
  "50 Shades of Gray",
  "E.L.James",
  116,
  "not read"
);
let theMagus = new Book("The Magus", "J.Fowles", 700, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(fiftyShadesOfGray);
addBookToLibrary(theMagus);

let container = document.querySelector("#container");
let addFormBtn = document.querySelector("#addform");
let form = document.querySelector("#form");
let inputFields = document.querySelectorAll("input");
let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputPages = document.querySelector("#pages");
let inputRead = document.querySelector("#read");

render(myLibrary);

inputFields.forEach(input => {
  input.addEventListener("focus", function(e) {
    e.target.value = "";
  });
});

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

function newBook() {
  let item = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.value
  );

  addBookToLibrary(item);

  while (container.firstChild) {
    console.log(container.firstChild);
    container.removeChild(container.firstChild);
  }

  render(myLibrary);
}
