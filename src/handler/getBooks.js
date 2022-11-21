let { books, detailBook } = require('../books');

const getBooks = (request, h) => {
    const { name, reading, finished } = request.query;

    const bookByName = detailBook.filter((book) => book.name.toUpperCase().include(name.toUpperCase()));
    let bookReading = detailBook.filter((book) => book.reading === true);
    let bookFinished = detailBook.filter((book) => book.finished === true);

    if (name !== undefined){
         books = bookByName;
        const response = h.response({
            status: 'success',
            data: { books },
        });
        response.code(200);
        return response;
    }

    if (reading !== undefined){
        if (reading === 1){
            books = bookReading;
            const response = h.response({
                status: 'success',
                data: { books },
            });
            response.code(200);
            return response;
        }
        if (reading === 0){
            books = !bookReading;
            const response = h.response({
                status: 'success',
                data: { books },
            });
            response.code(200);
            return response;
        }
    }

    if (finished !== undefined){
        if (finished === 1){
            books = bookFinished;
            const response = h.response({
                status: 'success',
                data: { books },
            });
            response.code(200);
            return response;
        }
        if (finished === 0){
            books = !bookFinished;
            const response = h.response({
                status: 'success',
                data: { books },
            });
            response.code(200);
            return response;
        }
    }

    if (name === undefined && reading === undefined && finished === undefined){
        const response = h.response({
            status: 'success',
            data: {
                books,
            },
        });
        response.code(200);
        return response;
    }
};

module.exports = getBooks;
