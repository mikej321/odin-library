const content = document.querySelector('.main-content');
const myForm = document.querySelector('.myForm');
const add = document.querySelector('.add');
const addBook = document.querySelector('.addBook');
const removeBook = document.querySelector('.remove');
const formEl = document.querySelectorAll('.formEl input');

let myLibrary = [];
const alphaRegex = /^[a-zA_Z0-9 ]*$/;

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype = {
    setBook: function() {
        const myTitle = document.querySelector('#title').value;
        this.title = myTitle;
        const myAuthor = document.querySelector('#author').value;
        this.author = myAuthor;
        const myPages = document.querySelector('#pages').value;
        this.pages = myPages;
        const read = document.querySelector('#read').checked;
        this.haveRead = read;        
    },
    
    addBookToLibraryArr: function() {
        let newBook = new Book(this.title, this.author, this.pages, this.haveRead);
        myLibrary.push(newBook);
    }
    
}




function bringUpForm(event) {
    event.preventDefault();
    myForm.classList.toggle('visible');
    let intervalID = setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        if (cards === null) {
            console.log('I am null');
        } else if (cards) {
            cards.forEach(card => card.classList.add('phaseOut'));
        }
        clearInterval(intervalID);
    }, 10);
    if (myForm.classList.contains('visible')) {
        add.textContent = 'Cancel';
    }

    if (!myForm.classList.contains('visible')) {
        add.textContent = 'Add';
    }
}

function changeAddBack() {
    if (add.textContent === 'Cancel') {
        add.textContent = 'Add';
    } else if (add.textContent === 'Add') {
        add.textContent = 'Cancel'
    }
}

function hideCards() {

}

function closeForm() {
    myForm.classList.remove('visible');
    let intervalID = setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        if (cards === null) {
            console.log('I am null');
        } else if (cards) {
            cards.forEach(card => card.classList.remove('phaseOut'));
        }
    })
}

function addBookToLibrary() {
    Book.prototype.setBook();
    Book.prototype.addBookToLibraryArr();
    closeForm();
    renderEl();
}

let indexPosition = 0;

function removeEle(event) {
   let isItRemoveButton = event.target;
   if (isItRemoveButton.tagName === 'BUTTON' && isItRemoveButton.classList.contains('remove')) {
    let parentEle = isItRemoveButton.parentElement.parentElement;
    removePosition = isItRemoveButton.parentElement.parentElement.getAttribute('data-listing');
    removePosition = Number(removePosition);
    myLibrary.splice(removePosition, 1);
    parentEle.remove();
    indexPosition--;
   }
}

function changeEle(event) {
    let isItChangeButton = event.target;
    if (isItChangeButton.tagName === 'BUTTON' && isItChangeButton.classList.contains('change')) {
        let changePosition = isItChangeButton.parentElement.getAttribute('data-Listing');
        changePosition = Number(changePosition);
        if (myLibrary[changePosition].haveRead === true) {
            myLibrary[changePosition].haveRead = false;
        } else {
            myLibrary[changePosition].haveRead = true;
        }

        if (myLibrary[changePosition].haveRead === true) {
            isItChangeButton.parentElement.parentElement.children[3].children[0].textContent = 'Yes';            
        } else {
            isItChangeButton.parentElement.parentElement.children[3].children[0].textContent = 'No';
        }
    }
}


function renderEl() {

  
   for (let i = indexPosition; i < myLibrary.length; i++) {
    const myEl = document.createElement('div');
    myEl.classList.add('card');
    
    const cardTitle = document.createElement('p');
    cardTitle.textContent = 'Title: ';
    const titleSpan = document.createElement('span');
    titleSpan.textContent = myLibrary[i].title;
    cardTitle.append(titleSpan);
    myEl.append(cardTitle);

    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = 'Author: ';
    const authorSpan = document.createElement('span');
    authorSpan.textContent = myLibrary[i].author;
    cardAuthor.append(authorSpan);
    myEl.append(cardAuthor);

    const cardPages = document.createElement('p');
    cardPages.textContent = 'Pages: ';
    const pagesSpan = document.createElement('span');
    pagesSpan.textContent = myLibrary[i].pages;
    cardPages.append(pagesSpan);
    myEl.append(cardPages);

    const cardRead = document.createElement('p');
    cardRead.textContent = 'Read: ';
    const readSpan = document.createElement('span');
   
    if (myLibrary[i].haveRead === true) {
        readSpan.textContent = 'Yes';
    } else {
        readSpan.textContent = 'No';
    }

    cardRead.append(readSpan);
    myEl.append(cardRead);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    myEl.append(buttonContainer);
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Remove';
    buttonContainer.append(removeButton);

    const changeButton = document.createElement('button');
    changeButton.classList.add('change');
    changeButton.textContent = 'Status';
    buttonContainer.append(changeButton);
    
    myEl.dataset.listing = `${indexPosition++}`;
    

    content.append(myEl);

   }

}

function checkInput() {
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const myTitle = document.querySelector('.formEl > #title');
        const myAuthor = document.querySelector('.formEl > #author');
        const myPages = document.querySelector('.formEl > #pages');
        const haveIRead = document.querySelector('.formEl > #read');
        const titleError = document.querySelector('.titleError');
        const pagesError = document.querySelector('.pagesError');
        const authorError = document.querySelector('.authorError');
        const checkedError = document.querySelector('.checkError');
        const errorMessage = document.querySelector('.errorMessage');

        if (myTitle.validity.valueMissing) {
            if (myTitle.classList.contains('inputValid')) {
                myTitle.classList.remove('inputValid');
            }
            titleError.parentElement.dataset.active = true;
            titleError.textContent = 'Please enter a title';
            titleError.classList.add('errorP');
            myTitle.classList.add('error');
        } else if (!myTitle.validity.valueMissing) {
            if (myTitle.classList.contains('error')) {
                titleError.classList.remove('errorP');
                myTitle.classList.remove('error');
            }
            titleError.parentElement.dataset.active = false;
            titleError.textContent = '';
            myTitle.classList.add('inputValid');
        }

        if (myAuthor.validity.valueMissing) {
            if (myAuthor.classList.contains('inputValid')) {
                myAuthor.classList.remove('inputValid');
            }
            authorError.parentElement.dataset.active = true;
            authorError.textContent = 'Please enter an author\'s name';
            authorError.classList.add('errorP');
            myAuthor.classList.add('error');
        } else if (!myAuthor.validity.valueMissing) {
            if (myAuthor.classList.contains('error')) {
                authorError.classList.remove('errorP');
                myAuthor.classList.remove('error');
            }
            authorError.parentElement.dataset.active = false;
            authorError.textContent = '';
            myAuthor.classList.add('inputValid');
        }

        if (myPages.validity.valueMissing) {
            if (myAuthor.classList.contains('inputValid')) {
                myAuthor.classList.remove('inputValid');
            }
            pagesError.parentElement.dataset.active = true;
            pagesError.textContent = 'Please provide the # of pages';
            pagesError.classList.add('errorP');
            myPages.classList.add('error');
        } else if (!myPages.validity.valueMissing) {
            if (myAuthor.classList.contains('error')) {
                pagesError.classList.remove('errorP');
                myPages.classList.remove('error');
            }
            pagesError.parentElement.dataset.active = false;
            pagesError.textContent = '';
            myPages.classList.add('inputValid');
        }

        if (!myTitle.validity.valueMissing && !myAuthor.validity.valueMissing && !myPages.validity.valueMissing) {
            addBookToLibrary();
            changeAddBack();
            myTitle.classList.remove('inputValid');
            myTitle.value = '';
            myAuthor.classList.remove('inputValid');
            myAuthor.value = '';
            myPages.classList.remove('inputValid');
            myPages.value = '';
        }

        
    })
}

add.addEventListener('click', bringUpForm);
checkInput();
// addBook.addEventListener('click', addBookToLibrary);
document.addEventListener('click', removeEle);
document.addEventListener('click', changeEle);


