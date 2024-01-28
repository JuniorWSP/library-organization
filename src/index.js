const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => (
  books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
);
/* console.log(fantasyOrScienceFiction()); */

// Requisito 2
const oldBooksOrdered = () => {
  const dataLimite = 2020;
  return books
    .filter((book) => (dataLimite - book.releaseYear) >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
};
/* console.log(oldBooksOrdered()); */

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

/* console.log(booksByAuthorBirthYear(1892)); */

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  const livros = books.filter((book) =>
    book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  const autores = livros.map((book) => book.author.name).sort();
  return autores;
};
/* console.log(fantasyOrScienceFictionAuthors()); */

// Requisito 5
const oldBooks = (year) =>
  books
    .filter((book) => (year - book.releaseYear) >= 60)
    .map((book) => book.name);
/* console.log(oldBooks(2022)); */

// Requisito 6
const contaPontos = (str) => (str.split('.').length - 1);

const authorWith3DotsOnName = () => {
  const livros = books
    .filter((book) => contaPontos(book.author.name) === 3)
    .map((book) => book.name);

  return livros.join(', ');
};
/* console.log(authorWith3DotsOnName()); */

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
