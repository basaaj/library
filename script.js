const myLibrary = [];

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const books = document.querySelector('.books');
const addButton = document.querySelector('#add');
const removeButtons = document.querySelectorAll('.remove');
const newButton = document.querySelector('#new-book');
const bookForm = document.querySelector('dialog');
const closeButton = document.querySelector('#close');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.display = function() {
        let newDiv = document.createElement('div');
        newDiv.className = 'book';
        newDiv.innerHTML = `<div>
                                <p class="header">${title}</p>
                                <p>${author}</p>
                                <p>${pages} Pages</p>
                            </div>`;

        let buttons = document.createElement('div');
        buttons.className = 'buttons';

        let readSlider = document.createElement('label');
        readSlider.className = 'switch';
        readSlider.innerHTML = `<input type="checkbox">
                                <span class="slider round"></span>`;
        if (read) {
            readSlider.firstChild.checked = true;
        }
        buttons.appendChild(readSlider);

        let removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener("click", () => {
            removeButton.parentElement.parentElement.remove();
            let index = myLibrary.indexOf(this);
            myLibrary.splice(index, 1);
        });
        buttons.appendChild(removeButton); 

        newDiv.appendChild(buttons);
        books.appendChild(newDiv);
    }
}

function addBookToLibrary() {
    if (bookTitle.value && bookAuthor.value && bookPages.value) {
        bookForm.close();
        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        myLibrary.push(newBook);
        newBook.display();
    }
}

addButton.addEventListener("click", (e) => {
    addBookToLibrary();
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;
});

newButton.addEventListener("click", () => {
    bookForm.showModal();
});

closeButton.addEventListener("click", (e) => {
    bookForm.close();
});

myLibrary.push(new Book("Percy Jackson and the Olympians: The Lightning Thief", "Rick Riordan", 416, true));
myLibrary.push(new Book("The Perks of Being a Wallflower", "Stephen Chbosky", 240, true));

for (i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
}