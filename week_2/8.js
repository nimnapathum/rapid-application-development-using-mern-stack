class Library {
    _books = [];

    addBook(title, author) {
        // const book = {
        //     title: title,
        //     author: author,
        //     borrowed: false
        // };
        // this.books.push(book);
        const book = new Book(title, author);
        this._books.push(book);
    }

    findBook(title) {
        for (let i = 0; i < this._books.length; i++) {
            if (this._books[i].title == title) {
                return i;
            }
        }
        return -1;
    }

    borrowBook(title) {
        const index = this.findBook(title);
        if (index !== -1 && !this._books[index].borrowed) {
            this._books[index].borrow() = true;
            return `you have borrowed ${title}`;
        } else if (index !== -1 && this._books[index].borrowed) {
            return `${title} is already borrowed.`;
        } else {
            return `${title} is not available in the library`;
        }
    }

    returnBook(title) {
        const index = this.findBook(title);
        if (index !== -1 && this._books[index].borrowed) {
            this._books[index].return() = false;
            return `you have returned ${title}`;
        } else if (index !== -1 && !this._books[index].borrowed) {
            return `${title} was not borrowed.`;
        } else {
            return `${title} is not available in the library`;
        }
    }

    listBooks() {
        return this._books.map(book => book.details());
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.borrowed = false;
    }

    borrow() {
        this.borrowed = false;
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
    } else {
        showResult(`Please enter the both title and author`);
    }
}

function returnBook() {
    const title = document.getElementById('title').value;
    if (title) {
        const result = myLibrary.returnBook(title);
        showResult(result);
    } else {
        showResult('Please enter the title');
    }
}

function showResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}