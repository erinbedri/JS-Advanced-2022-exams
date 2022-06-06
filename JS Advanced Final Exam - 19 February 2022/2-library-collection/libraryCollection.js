class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error('Not enough space in the collection.');
        }

        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false, //payed as given in instructions not correct, should be paid
        }

        this.books.push(book);
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        for (const book of this.books) {
            if (book.bookName === bookName) {
                if (book.payed) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`;
                }
            }
        }

        throw new Error(`${bookName} is not in the collection.`);
    }

    removeBook(bookName) {
        for (const book of this.books) {
            if (book.bookName === bookName) {
                if (!book.payed) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                } else {
                    this.books = this.books.filter(function (book) { return book.bookName != bookName; });
                    this.capacity++;
                    return `${bookName} remove from the collection.`;
                }
            }
        }

        throw new Error("The book, you're looking for, is not found.");
    }

    getStatistics(bookAuthor) {
        let result = [];

        if (!bookAuthor) {
            let emptySlots = this.capacity;
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            
            this.books.sort((a, b) => (a.bookName.localeCompare(b.bookName)));
            
            for (const book of this.books) {
                if (book.payed) {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                } else {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                }
            }

        } else {
            let isInCollection = false;

            for (const book of this.books) {
                if (book.bookAuthor === bookAuthor) {
                    isInCollection = true;

                    if (book.payed) {
                        result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                    } else {
                        result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                    }
                }
            }
            if (!isInCollection) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
        return result.join('\n');
    }
}




