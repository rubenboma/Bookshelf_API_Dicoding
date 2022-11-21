const addBook = require('./handler/addBook2');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
];

module.exports = routes;
