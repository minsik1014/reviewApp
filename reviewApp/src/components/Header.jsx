// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ padding: '10px 20px', backgroundColor: '#121212' }}>
      <Link 
        to="/" 
        style={{ 
          color: 'white', 
          fontWeight: 'bold', 
          fontSize: '20px', 
          textDecoration: 'none' 
        }}
      >
        리뷰
      </Link>
    </div>
  );
}

export default Header;
