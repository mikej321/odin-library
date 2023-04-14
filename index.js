// Global Variables

const mainContainer = document.querySelector('.main-container');



/* write a function that loops through the array and displays each
   book on the page. I can display them in some sort of table, or
   each on their own 'card'. It might help for now to manually add
   a few books to my array so I can see the display */

/* Add a 'new book' button that brings up a form allowing users
   to input the details for the new book: author, title, number of pages,
   whether it's been read, etc. Look up how to prevent events with event.preventDefault()
   for the submit button as it'll want to try to send to a server that doesn't exist */







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
        let newBook = new Book(author, title, pages, readStatus);
        myLibrary.push(newBook);
    },

    displayBook() {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        mainContainer.insertAdjacentElement('beforeend', cardContainer);
        
    }
}

function bookDisplay() {
    // loops through the array

    // displays each book on the page

    // you can display them in some sort of table or on their own 'card'

    /* It might help for now to manually add a few books to your array
       so you can see the display */
}



function addBookToLibrary() {
    // do stuff here
    
}



/* Object.entries() can be used to create a two-element subarray
   of all of the properties on an object. */

// Object.fromEntries() creates a new object from a list of entries 


