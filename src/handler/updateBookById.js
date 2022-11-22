const { books, detailBook } = require('../books');

const updateBookById = (request, h) => {
    const { bookId } = request.params;
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toISOString();
    const finished = readPage === pageCount;

    const bookIndex = books.findIndex((book) => book.id === bookId);

    const isBookExist = books.filter((book) => book.id === bookId).length > 0;
    // const detailData = { name, year, author, summary, publisher, pageCount, readPage, reading }

    if (!isBookExist){
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }

    if (isBookExist){
        if (name === undefined || name === ''){
            const response = h.response({
                status: 'fail',
                message: 'Gagal memperbarui buku. Mohon isi nama buku',
            });
            response.code(400);
            return response;
        }
        if (pageCount < readPage){
            const response = h.response({
                status: 'fail',
                message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
            });
            response.code(400);
            return response;
        }
        if (bookIndex > -1){
            detailBook[bookIndex] = {
                ...detailBook[bookIndex],
                name, 
                year, 
                author, 
                summary, 
                publisher, 
                pageCount, 
                finished,
                readPage, 
                reading,
                updatedAt,
            };
            books[bookIndex] = {
                ...books[bookIndex],
                name,
            };
            const response = h.response({
                status: 'success',
                message: 'Buku berhasil diperbarui',
            });
            response.code(200);
            return response;
        }
    }
};

module.exports = updateBookById;
