const { detailBook } = require('../books');

const getBookById = (request, h) => {
    const { bookId } = request.params;
    const bookById = detailBook.filter((book) => book.id === bookId)[0];
    
    try {
        if (bookById !== undefined){
            const book = bookById; 
            const response = h.response({
                status: 'success',
                data: { book },
            });
            response.code(200);
            return response;
        }

        if (bookById === undefined){
            const response = h.response({
                status: 'fail',
                message: 'Buku tidak ditemukan',
            });
            response.code(404);
            return response;
        }
    } catch (error) {
        const response = h.response({
            status: 'fail',
            message: 'connection error',
        });
        response.code(500);
        return response;
    }
};

module.exports = getBookById;
