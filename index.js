// Global Variables

const mainContainer = document.querySelector('.main-container');
const addBook = document.querySelector('.addBook');
document.addEventListener('click', deleteCard);
document.addEventListener('click', changeStatus);

function deleteCard(event) {
    // console.log(event.target.parentElement);

    if (event.target.parentElement.classList.contains('card') && event.target.classList == 'delete') {
        console.log(event.target);
        let grabbedIndex = event.target.parentElement.dataset.listing;
        for (let i = 0; i < myLibrary.length; i++) {
            if (grabbedIndex == i) {
                myLibrary.splice(`${grabbedIndex}`, 1);
                console.log(event.target.parentElement);
                event.target.parentElement.classList.add('disable');
            }
            
        }
    }
}

function changeStatus(event) {
    if (event.target.parentElement.classList.contains('card') && event.target.classList == 'readButton') {
        let grabbedIndex = event.target.parentElement.dataset.listing;
        const readStatusElements = document.querySelectorAll('.elStatus');
        if (readStatusElements[grabbedIndex].textContent.includes('yes')) {
            readStatusElements[grabbedIndex].textContent = 'Read: no';
        } else if (readStatusElements[grabbedIndex].textContent.includes('no')) {
            readStatusElements[grabbedIndex].textContent = 'Read: yes';
        }

        myLibrary[grabbedIndex].readStatusChange();
        
    }
}






const display = document.querySelector('.displayLibrary').addEventListener('click', function() {
    bookDisplay();
});



const form = document.querySelector('form');
let authorInput = document.querySelector('#author');
let titleInput = document.querySelector('#title');
let pagesInput = document.querySelector('#pages');
let statusInput = document.querySelector('#readStatus');
const finish = document.querySelector('button[type="submit"]');
let indexPosition = 0;

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
        card = document.createElement('div');
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
        elStatus.classList.add('elStatus')
        elStatus.textContent = 'Read: ';
        let spanStatus = document.createElement('span');
        spanStatus.textContent = book.readStatus;
        elStatus.append(spanStatus);
        
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Remove';

        let readStatusButton = document.createElement('button');
        readStatusButton.classList.add('readButton');
        readStatusButton.textContent = 'Read?';
        
        card.dataset.listing = `${indexPosition++}`;

        mainContainer.insertAdjacentElement('beforeend', card);
        card.insertAdjacentElement('beforeend', elAuthor);
        card.insertAdjacentElement('beforeend', elTitle);
        card.insertAdjacentElement('beforeend', elPages);
        card.insertAdjacentElement('beforeend', elStatus);
        card.insertAdjacentElement('beforeend', readStatusButton);
        card.insertAdjacentElement('beforeend', deleteButton);

        deleteButton.addEventListener('click', function() {
            // console.log(this.parentElement.dataset.listing);
            
        })
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
        author = authorInput.value;
        title = titleInput.value;
        pages = pagesInput.value;
        readStatus = statusInput.value;
        let newBook = new Book(author, title, pages, readStatus.toLowerCase());
        myLibrary.push(newBook);
    },

    readStatusChange() {
        
        

        // if (this.readStatus == 'yes') { 
        //     debugger;
        //     this.readStatus = 'no';
        // } else if (this.readStatus == 'no') {
        //     this.readStatus = 'yes';
        // }

    
    }
}

addBook.addEventListener('click', function() {
    // change form display from none to block

    if (!form.classList.contains('open')) {
        form.classList.toggle('open');
        addBook.textContent = 'Cancel';
    } else {
        form.classList.remove('open');
        addBook.textContent = 'Add Book';
        authorInput.value = '';
        titleInput.value = '';
        pagesInput.value = '';
        statusInput.value = '';

    }
})

// finish.addEventListener('click', function(event) {
//     event.preventDefault();
// })

finish.addEventListener('click', function(event) {
    event.preventDefault();
    Book.prototype.addBook();
    form.classList.remove('open');
    addBook.textContent = 'Add Book';
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    statusInput.value = '';
})






function addBookToLibrary() {
    // do stuff here
    
}



/* Object.entries() can be used to create a two-element subarray
   of all of the properties on an object. */

// Object.fromEntries() creates a new object from a list of entries 


