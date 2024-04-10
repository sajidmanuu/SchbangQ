import React from "react";
import { useLocation, Link } from "react-router-dom";
import StarRating from "./StarRating";

const BookDetail = () => {
  const location = useLocation();
  const { book } = location.state;

  const { volumeInfo, saleInfo, searchInfo } = book;

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Add home button */}
        <div className="mb-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-white font-semibold inline-block bg-gray-200 hover:bg-gray-800 px-4 py-2 rounded-md shadow-md transition duration-300"
          >
            Home
          </Link>
        </div>

        <div className="rounded-lg bg-white shadow-md px-8 py-6 mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {volumeInfo.title}
          </h1>
          {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail && (
            <img
              src={volumeInfo.imageLinks.thumbnail}
              alt={volumeInfo.title}
              className="book-cover mb-4 rounded-lg shadow-lg"
            />
          )}
          <div className="flex flex-wrap mb-4">
            <p className="text-gray-700 mr-4 mb-2">
              {" "}
              <b> Authors:</b> {volumeInfo.authors.join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              {" "}
              <b> Published Date: </b> {volumeInfo.publishedDate}
            </p>
          </div>
          <p className="text-gray-700 mb-2">
            {" "}
            <b> Publisher:</b> {volumeInfo.publisher}
          </p>
          <p className="text-gray-700 mb-2">
            {" "}
            <b> Categories:</b> {volumeInfo.categories.join(", ")}
          </p>
          <p className="text-gray-700 mb-2">
            {" "}
            <b> Page Count:</b> {volumeInfo.pageCount}
          </p>
          <p className="text-gray-700 mb-2">
            {" "}
            <b> Language: </b>
            {volumeInfo.language}
          </p>
          {/* Display sale info if available */}
          {saleInfo && (
            <div className="mb-4">
              <p className="text-gray-700 mb-1">
                Saleability: {saleInfo.saleability}
              </p>
              {saleInfo.isEbook && (
                <p className="text-gray-700">
                  This book is available as an ebook
                </p>
              )}
            </div>
          )}
          {/* Display search info if available */}
          {searchInfo && (
            <div className="mb-4">
              <p className="text-gray-700">
                Search snippet: {searchInfo.textSnippet}
              </p>
            </div>
          )}
          {/* Add any additional details you want to display */}
          <p className="text-gray-700">Description: {volumeInfo.description}</p>
        </div>

        {/* Rating */}
        <div className="rounded-lg bg-white shadow-md px-8 py-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Rating</h2>
          <StarRating
            rating={volumeInfo.averageRating ? volumeInfo.averageRating : 0}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
