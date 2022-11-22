let { books, detailBook } = require('../books');

const getBooks = (request, h) => {
    const { name, reading, finished } = request.query;
    
    if (name !== undefined){
        const bookByName = books.filter((book) => book.name.toUpperCase() === name.toUpperCase());
        const response = h.response({
            status: 'success',
            data: { books: bookByName },
        });
        response.code(200);
        return response;
    }

    if (reading !== undefined){
        const readingBooks = detailBook.filter((book) => book.reading === true);
        const unreadingBooks = detailBook.filter((book) => book.reading === false);
        
        if (reading === '1'){
            const response = h.response({
                status: 'success',
                data: { books: readingBooks.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                    })),
                },
              });
            response.code(200);
            return response;
        }

        if (reading === '0'){
            const response = h.response({
                status: 'success',
                data: { 
                    books: unreadingBooks.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher,
                    })),
                },
            });
            response.code(200);
            return response;
        }
        const response = h.response({
            status: 'fail',
            message: 'reading hanya menerima value 1 = true dan 0 = false',
        });
        response.code(400);
        return response;
    }

    if (name === undefined && reading === undefined && finished === undefined){
        const response = h.response({
            status: 'success',
            data: { books },
        });
        response.code(200);
        return response;
    }
};

module.exports = getBooks;
