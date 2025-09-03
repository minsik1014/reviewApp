// components/ReviewList.js
import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

function ReviewList({ reviews, addReview, updateReview, deleteReview, category }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddReview = (review) => {
    addReview({ ...review, id: Date.now() });
    setIsAdding(false);
  };

  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

  return (
    <div>
      {sortedReviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          updateReview={updateReview}
          deleteReview={deleteReview}
          category={category}
        />
      ))}
      {isAdding ? (
        <ReviewForm onSave={handleAddReview} onCancel={() => setIsAdding(false)} category={category} />
      ) : (
        <button onClick={() => setIsAdding(true)} style={{ marginTop: '20px' }}>+ 리뷰 작성</button>
      )}
    </div>
  );
}

export default ReviewList;
