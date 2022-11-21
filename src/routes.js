const addBook = require('./handler/addBook');
const getBooks = require('./handler/getBooks');

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
];

module.exports = routes;
