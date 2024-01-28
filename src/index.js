const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => (
  books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
);
/* console.log(fantasyOrScienceFiction()); */

// Requisito 2
const oldBooksOrdered = (year) => {
  // escreva seu código aqui
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  const livros = books.filter((book) =>
    book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  const autores = livros.map((book) => book.author.name).sort();
  return autores;
};
//console.log(fantasyOrScienceFictionAuthors());

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
