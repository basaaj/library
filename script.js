const myLibrary = [];

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const books = document.querySelector('.books');
const addButton = document.querySelector('#add');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    let newDiv = document.createElement('div');
    newDiv.className = 'book';
    newDiv.textContent = book.title + book.author + book.pages + book.read;
    books.appendChild(newDiv);
}

myLibrary.push(new Book("Naruto ", "Masashi Kishimoto ", 250, true));
myLibrary.push(new Book("Bleach ", "Tite Kubo ", 250, true));

for (i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
}

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
});