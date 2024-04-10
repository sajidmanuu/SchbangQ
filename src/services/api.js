// api.js
const API_URL = 'https://d1krvzwx5oquy1.cloudfront.net/books.json';

export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
