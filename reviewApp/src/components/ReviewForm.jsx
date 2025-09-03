// components/ReviewForm.js
import React, { useState } from 'react';
import './Review.css';


function ReviewForm({ onSave, onCancel, initialData = {}, category }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [image, setImage] = useState(initialData.image || '');
  const [rating, setRating] = useState(initialData.rating || 0);
  const [shortText, setShortText] = useState(initialData.shortText || '');
  const [fullText, setFullText] = useState(initialData.fullText || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: initialData.id || Date.now(), title, image, rating, shortText, fullText });
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <input
        type="text"
        placeholder={category === 'book' ? '책 제목 입력' : '영화 제목 입력'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="이미지 URL 입력"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              cursor: 'pointer',
              color: star <= rating ? '#e50914' : '#aaa',
              fontSize: '24px',
              marginRight: '4px',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="한줄평 입력"
        value={shortText}
        onChange={(e) => setShortText(e.target.value)}
        required
      />
      <textarea
        rows="4"
        placeholder="감상문 입력"
        value={fullText}
        onChange={(e) => setFullText(e.target.value)}
      ></textarea>
      <div style={{ marginTop: '10px' }}>
        <button type="submit">저장</button>
        <button type="button" onClick={onCancel}>취소</button>
      </div>
    </form>
  );
}

export default ReviewForm;
