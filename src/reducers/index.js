// index.js
import { combineReducers } from 'redux';
import { FETCH_BOOKS_SUCCESS, FILTER_BOOKS } from '../actions/actions';

const initialState = {
  books: [],
  filteredBooks: [],
  filters: {},
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        filteredBooks: action.payload,
      };
    case FILTER_BOOKS:
      const { genre, author } = action.payload;
      const filteredBooks = state.books.filter(book => 
        (!genre || book.genre === genre) && (!author || book.author === author)
      );
      return {
        ...state,
        filters: action.payload,
        filteredBooks,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
