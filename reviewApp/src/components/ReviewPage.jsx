// components/ReviewPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import Header from './Header';
import './Review.css';


function ReviewPage() {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const updateReview = (updatedReview) => {
    setReviews(reviews.map(r => r.id === updatedReview.id ? updatedReview : r));
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <div>
      <Header />
      <h1 style={{ padding: '0 20px', color: 'white' }}>
        {category === 'book' ? '📚 책 리뷰' : '🎬 영화 리뷰'}
      </h1>
      <div style={{ padding: '0 20px' }}>
        <ReviewList 
          reviews={reviews} 
          addReview={addReview} 
          updateReview={updateReview}
          deleteReview={deleteReview} 
          category={category}
        />
      </div>
    </div>
  );
}

export default ReviewPage;
