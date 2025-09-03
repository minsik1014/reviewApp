// components/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>리뷰 선택</h1>
      <div className="card-row">
        <div className="card" onClick={() => navigate('/review/book')}>
          <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="책" />
          <h2>책 리뷰</h2>
        </div>
        <div className="card" onClick={() => navigate('/review/movie')}>
          <img src="https://cdn-icons-png.flaticon.com/512/888/888064.png" alt="영화" />
          <h2>영화 리뷰</h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;