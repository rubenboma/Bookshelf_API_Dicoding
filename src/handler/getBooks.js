let { books, detailBook } = require('../books');

const getBooks = (request, h) => {
    const { name, reading, finished } = request.query;
 
    if (name !== undefined){
        const bookByName = books.filter((book) => book.name.toUpperCase().include(name.toUpperCase()));
        books = bookByName;
        const response = h.response({
            status: 'success',
            data: { books },
        });
        response.code(200);
        return response;
    }

    if (reading !== undefined){
        const bookReading = detailBook.filter((book) => book.reading === true);
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
        let bookFinished = detailBook.filter((book) => book.finished === true);
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

    if (name === undefined){
        const response = h.response({
            status: 'success',
            data: {
                books,
            },
        });
        response.code(200);
        return response;  
    }

    // if (reading === undefined){
    //     const response = h.response({
    //         status: 'success',
    //         data: {
    //             books,
    //         },
    //     });
    //     response.code(200);
    //     return response;  
    // }

    // if (finished === undefined){
    //     const response = h.response({
    //         status: 'success',
    //         data: {
    //             books,
    //         },
    //     });
    //     response.code(200);
    //     return response;  
    // }
};

module.exports = getBooks;
