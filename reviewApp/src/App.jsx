// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ReviewPage from './components/ReviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/review/:category" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;