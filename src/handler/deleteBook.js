const { books, detailBook } = require('../books');

const deleteBookById = (request, h) => {
    const { bookId } = request.params;

    const bookIndex = books.findIndex((book) => book.id === bookId);
    
    const isBookExist = bookIndex !== -1;
    try { 
        if (!isBookExist){
            const response = h.response({
                status: 'fail',
                message: 'Buku gagal dihapus. Id tidak ditemukan',
            });
            response.code(404);
            return response;
        }
        if (isBookExist){
            books.splice(bookIndex, 1);
            detailBook.splice(bookIndex, 1);
            const response = h.response({
                status: 'success',
                message: 'Buku berhasil dihapus',
            });
            response.code(200);
            return response;
        }
    } catch (error){
        const response = h.response({
            status: 'fail',
            message: 'Error',
        });
        response.code(500);
        return response;
    }
};

module.exports = deleteBookById;
