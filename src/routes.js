const addBook = require('./handler/addBook');
const getBooks = require('./handler/getAllBooks2');
const getBookById = require('./handler/getBookById');
const updateBookById = require('./handler/updateBookById');
const deleteBookById = require('./handler/deleteBook');

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
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookById,
    },
];

module.exports = routes;
