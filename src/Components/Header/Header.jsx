import React from 'react';
import { BookOpen, Home, TrendingUp } from 'lucide-react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <BookOpen size={20} />
        <span>MyBooks</span>
      </div>
      <div className="nav-menu">
        <button
          onClick={() => setCurrentPage('home')}
          className={`nav-btn ${currentPage === 'home' ? 'nav-btn-active' : ''}`}
        >
          <Home size={16} />
          <span>Beranda</span>
        </button>
        <button
          onClick={() => setCurrentPage('stats')}
          className={`nav-btn ${currentPage === 'stats' ? 'nav-btn-active' : ''}`}
        >
          <TrendingUp size={16} />
          <span>Statistik</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;