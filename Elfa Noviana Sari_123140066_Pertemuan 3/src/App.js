import React, { useState } from 'react';
import { BookProvider } from './context/BookContext.js';
import Header from './Components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import StatsPage from './pages/StatsPage/StatsPage.jsx';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <BookProvider>
      <div className="app">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="main">
          {currentPage === 'home' ? <HomePage /> : <StatsPage />}
        </main>
      </div>
    </BookProvider>
  );
};

export default App;