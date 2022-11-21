const { nanoid } = require('nanoid');
const { books, detailBook } = require('../books');

const tempoData = [];

const addBook = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(6);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    
    const detailData = { id, name, year, author, summary, publisher, pageCount, finished, readPage, reading, insertedAt, updatedAt };
    const displayData = { id, name, publisher };
    tempoData.push(detailData);
    
    const isSuccess = tempoData.filter((book) => book.id === id).length > 0;
  
    if (name === undefined){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
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
        books.push(displayData);
        detailBook.push(detailData);
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: { bookId: id },
        });
        response.code(201);
        return response;
    }
    if (!isSuccess){
        const response = h.response({
            status: 'fail',
            message: 'Buku gagal ditambahkan',
        });
        response.code(500);
        return response;
    }
};

module.exports = addBook;
