class Library {
    books = [];

    addBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        this.updateBookList();
    }

    findBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return i;
            }
        }
        return -1;
    }

    borrowBook(title) {
        const index = this.findBook(title);
        if (index !== -1 && !this.books[index].borrowed) {
            this.books[index].borrow();
            this.updateBookList();
            return `You have borrowed "${title}".`;
        } else if (index !== -1 && this.books[index].borrowed) {
            return `"${title}" is already borrowed.`;
        } else {
            return `"${title}" is not available in the library.`;
        }
    }

    returnBook(title) {
        const index = this.findBook(title);
        if (index !== -1 && this.books[index].borrowed) {
            this.books[index].return();
            this.updateBookList();
            return `You have returned "${title}".`;
        } else if (index !== -1 && !this.books[index].borrowed) {
            return `"${title}" was not borrowed.`;
        } else {
            return `"${title}" is not available in the library.`;
        }
    }

    updateBookList() {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';
        this.books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} (${book.borrowed ? 'Borrowed' : 'Available'})`;
            bookList.appendChild(li);
        });
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.borrowed = false;
    }

    borrow() {
        this.borrowed = true;
    }

    return () {
        this.borrowed = false;
    }

    details() {
        return {
            title: this.title,
            author: this.author,
            borrowed: this.borrowed
        };
    }
}

const myLibrary = new Library();

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
        myLibrary.addBook(title, author);
        showResult(`Added "${title}" by ${author}`);
        clearInputs();
    } else {
        showResult('Please enter both title and author');
    }
}

function borrowBook() {
    const title = document.getElementById('title').value;
    if (title) {
        const result = myLibrary.borrowBook(title);
        showResult(result);
        clearInputs();
    } else {
        showResult('Please enter the title');
    }
}

function returnBook() {
    const title = document.getElementById('title').value;
    if (title) {
        const result = myLibrary.returnBook(title);
        showResult(result);
        clearInputs();
    } else {
        showResult('Please enter the title');
    }
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}