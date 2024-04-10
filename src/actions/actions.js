// actions.js
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FILTER_BOOKS = 'FILTER_BOOKS';

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const filterBooks = (filters) => ({
  type: FILTER_BOOKS,
  payload: filters,
});
