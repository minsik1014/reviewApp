// components/ReviewCard.js
import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import './Review.css';


function ReviewCard({ review, updateReview, deleteReview, category }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  if (isEditing) {
    return (
      <ReviewForm
        initialData={review}
        onSave={(updated) => {
          updateReview(updated);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
        category={category}
      />
    );
  }

  return (
    <div className="review-card">
      <img
        src={review.image}
        alt="리뷰 이미지"
        style={{ width: '150px', borderRadius: '8px', cursor: 'pointer' }}
        onClick={() => setShowFullText(!showFullText)}
      />
      <div style={{ marginLeft: '20px' }}>
        <h3>{review.title}</h3>
        <p>{'★'.repeat(review.rating)}</p>
        <p>{review.shortText}</p>
        {showFullText && <p>{review.fullText}</p>}
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={() => deleteReview(review.id)}>삭제</button>
      </div>
    </div>
  );
}

export default ReviewCard;