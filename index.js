// Global Variables

const mainContainer = document.querySelector('.main-container');
const addBook = document.querySelector('.addBook');

const display = document.querySelector('.displayLibrary').addEventListener('click', function() {
    bookDisplay();
});

const form = document.querySelector('form');
let authorInput = document.querySelector('#author');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');
let statusInput = document.querySelector('#readStatus');

let myAuthor;
let myTitle;
let myPages;
let myStatus;



/* write a function that loops through the array and displays each
book on the page. I can display them in some sort of table, or
each on their own 'card'. It might help for now to manually add
a few books to my array so I can see the display */

/* Add a 'new book' button that brings up a form allowing users
to input the details for the new book: author, title, number of pages,
whether it's been read, etc. Look up how to prevent events with event.preventDefault()
for the submit button as it'll want to try to send to a server that doesn't exist */


function bookDisplay() {
    // loops through the array

    // displays each book on the page
    
    // you can display them in some sort of table or on their own 'card'
    
    /* It might help for now to manually add a few books to your array
    so you can see the display */
    
    for (let book of myLibrary) {
        let card = document.createElement('div');
        card.classList.add('card');

        let elAuthor = document.createElement('p');
        elAuthor.textContent = 'Author: ';
        let spanAuthor = document.createElement('span');
        spanAuthor.textContent = book.author;
        elAuthor.append(spanAuthor);

        let elTitle = document.createElement('p');
        elTitle.textContent = 'Title: ';
        let spanTitle = document.createElement('span');
        spanTitle.textContent = book.title;
        elTitle.append(spanTitle);

        let elPages = document.createElement('p');
        elPages.textContent = 'Pages: ';
        let spanPages = document.createElement('span');
        spanPages.textContent = book.pages;
        elPages.append(spanPages);

        let elStatus = document.createElement('p');
        elStatus.textContent = 'Read: ';
        let spanStatus = document.createElement('span');
        spanStatus.textContent = book.readStatus;
        elStatus.append(spanStatus);

        mainContainer.insertAdjacentElement('beforeend', card);
        card.insertAdjacentElement('beforeend', elAuthor);
        card.insertAdjacentElement('beforeend', elTitle);
        card.insertAdjacentElement('beforeend', elPages);
        card.insertAdjacentElement('beforeend', elStatus);
    }
   
}





let myLibrary = [];

function Book(author, title, pages, readStatus) {
    // constructor function
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype = {
    
    addBook(author, title, pages, readStatus) {
        author = prompt('What is the author\'s name?');
        title = prompt('What is the title of the book?');
        pages = prompt('How many pages total does the book contain?');
        readStatus = prompt('Have you read the book yet? Yes or No');
        let newBook = new Book(author, title, pages, readStatus.toLowerCase());
        myLibrary.push(newBook);
    },

    displayBook() {
    }
}

addBook.addEventListener('click', function() {
    Book.prototype.addBook();
})

authorInput.addEventListener('input', function() {
    myInput = authorInput.value;
})




function addBookToLibrary() {
    // do stuff here
    
}



/* Object.entries() can be used to create a two-element subarray
   of all of the properties on an object. */

// Object.fromEntries() creates a new object from a list of entries 


