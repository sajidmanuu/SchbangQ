// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooksSuccess } from './actions/actions';
import { fetchBooks } from './services/api';
import BookListing from './components/BookListing';
import Filters from './components/Filters';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import BookDetail from './components/BookDetail';
import Footer from './components/Footer'
import './styles/styles.css'
import './App.css'
// BookDetail
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooksData = async () => {
      const booksData = await fetchBooks();
      dispatch(fetchBooksSuccess(booksData));
    };
    fetchBooksData();
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Filters />
        <Routes>
          <Route path="/" element={<BookListing />} /> {/* Render BookListing component when root path is matched */}
          <Route path="/book" element={<BookDetail />} /> {/* Render BookDetails component when "/book/:id" path is matched */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
