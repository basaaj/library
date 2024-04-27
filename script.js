const myLibrary = [];

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const books = document.querySelector('.books');
const addButton = document.querySelector('#add');
const removeButtons = document.querySelectorAll('.remove');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    if (bookTitle.value && bookAuthor.value && bookPages.value) {
        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        myLibrary.push(newBook);
        displayBook(newBook);
    }
}

function displayBook(book) {
    let newDiv = document.createElement('div');
    newDiv.className = 'book';
    newDiv.textContent = book.title + book.author + book.pages + book.read;

    let removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove();
    });
    newDiv.appendChild(removeButton);

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
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;
});