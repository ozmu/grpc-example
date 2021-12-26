const books = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        page_count: 1232,
        isbn: '978-0-395-19395-8',
        description: 'The Lord of the Rings is an epic high fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold',
    }
]

function findBook(id) {
    return books.find(book => book.id === id);
}

module.exports = {
    findBook
}