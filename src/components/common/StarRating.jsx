import { useState } from "react";



const StarRating = ({ rating, setRating }) => {

    const handleRating = (rate) => {
      setRating((prevReview) => ({ ...prevReview, rating: rate }));
    };
  
    return (
      <div className="star-rating-wrapper">
        {[1, 2, 3, 4, 5].map((index) => (
          <i 
            key={index}
            className={`bi bi-star${index <= rating ? '-fill' : ''} star-icon`}
            onClick={() => handleRating(index)}
            style={{ cursor: 'pointer' }} 
          />
        ))}
      </div>
    );
  };

  export default StarRating;
  