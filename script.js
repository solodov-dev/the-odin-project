let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function render(bookList) {


  bookList.forEach(book => {
    let card = document.createElement("div");
    card.className = "card";
    let list = document.createElement("ul");
    list.className = "list";
    for (let property in book) {
      if (book.hasOwnProperty(property)) {
        if (property == 'info') break;
        let listItem = document.createElement("li");
        listItem.innerHTML = `${property.toUpperCase()} - ${book[property]}`;
        list.appendChild(listItem);
      }
    }
    card.appendChild(list);
    container.appendChild(card);
  });
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolien", 295, "not read yet");
let fiftyShadesOfGray = new Book(
  "50 Shades of Gray",
  "E.L.James",
  116,
  "not read yet"
);
let theMagus = new Book("The Magus", "J.Fowles", 700, "reading");

addBookToLibrary(theHobbit);
addBookToLibrary(fiftyShadesOfGray);
addBookToLibrary(theMagus);


let container = document.querySelector("#container");
let addBookBtn = document.querySelector("#addform");
let form = document.querySelector("#form");
let inputFields = document.querySelectorAll("input");
let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputPages = document.querySelector("#pages");
let inputRead = document.querySelector("#read");

render(myLibrary);

inputFields.forEach(input => {
  input.addEventListener('focus', function(e){
    e.target.value = '';
  })
})

function showForm(){
  form.style.display = "block";
}

function hideForm(){
  form.style.display = "none";
}

function newBook(){
    let item = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
    addBookToLibrary(item);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    render(myLibrary);
}