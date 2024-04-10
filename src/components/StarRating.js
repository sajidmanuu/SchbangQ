import React from 'react';

const StarRating = ({ rating }) => {
  // Determine the color based on the rating
  const getColor = () => {
    return rating < 2 ? 'red' : 'yellow';
  };

  // Logic to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Render a filled star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Render an empty star
      }
    }
    return stars;
  };

  return (
    <div className={`star-rating ${getColor()}`}> {/* Apply the CSS class based on the rating */}
      {renderStars()}
    </div>
  );
};

export default StarRating;
