const { nanoid } = require('nanoid');
const books = require('../books');

const addBook = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(6);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
    };
    const detailsToDisplay = { id, name, publisher };
    
    books.push(detailsToDisplay);
     
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (name === undefined || name == null){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (typeof reading !== 'boolean'){
        const response = h.response({
            status: 'fail',
            message: 'reading harus boolean ',
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }
    if (isSuccess){
        const book = books.filter((bookById) => bookById.id === id)[0];
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
                book,
            },
        });
        response.code(201);
        return response;
    }
    if (!isSuccess) {
        const response = h.response({
            status: 'error',
            message: 'Buku gagal ditambahkan',
        });
        response.code(500);
        return response;
    }
};

module.exports = addBook;
