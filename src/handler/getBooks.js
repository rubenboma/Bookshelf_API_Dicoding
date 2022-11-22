let { books, detailBook } = require('../books');

const getBooks = (request, h) => {
    const { name, reading, finished } = request.query;
    
    if (name !== undefined){
        const bookByName = books.filter((book) => book.name.toUpperCase() === name.toUpperCase());
        // books = bookByName;
        const response = h.response({
            status: 'success',
            data: { books: bookByName },
        });
        response.code(200);
        return response;
    }
    if (name === undefined){
        const response = h.response({
            status: 'success',
            data: { books },
        });
        response.code(200);
        return response;
    }
};

module.exports = getBooks;
