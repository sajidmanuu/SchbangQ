import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks } from '../actions/actions';
import '../styles/styles.css'

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ author: '' });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    dispatch(filterBooks(filters));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md ">
      {/* <h2 className="text-lg font-semibold mb-2">Filters</h2> */}
      <div className="flex items-center">
        <input
          type="text"
          name="author"
          placeholder="Enter Author Name"
          value={filters.author}
          onChange={handleFilterChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          style={{ marginBottom: '0.5rem' }} // Added margin-bottom to the input field
        />
        <button
          onClick={applyFilters}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600 transition duration-300"
          style={{ marginBottom: '0.5rem' }} // Added margin-bottom to the button
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;
