import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BookListing = () => {
  const { books, filters } = useSelector(state => state.books);
  const navigate = useNavigate();

  const displayedBooks = filters.author ? books.filter(book => book.volumeInfo.authors.includes(filters.author)) : books;

  const handleClick = (book) => {
    navigate(`/book`, { state: { book } });
  };

  const getColor = (rating) => {
    return rating < 2 ? 'text-red-500' : 'text-yellow-500';
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Buying E-commerce Web Application</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition duration-300 transform hover:scale-105" onClick={() => handleClick(book)}>
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-48 object-cover mb-4" />
              )}
              <div className="text-gray-800">
                <h2 className="text-lg font-semibold">{book.volumeInfo.title}</h2>
                <p className="text-sm text-gray-600">Authors: {book.volumeInfo.authors.join(', ')}</p>
                <div className={`flex items-center ${getColor(book.volumeInfo.averageRating)}`}>
                  {renderStars(book.volumeInfo.averageRating)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No books available</div>
        )}
      </div>
    </div>
  );
};

export default BookListing;
