const addBook = require('./handler/addBook');
const getBooks = require('./handler/getAllBooks2');
const getBookById = require('./handler/getBookById');
const updateBookById = require('./handler/updateBookById');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookById,
    },
];

module.exports = routes;
