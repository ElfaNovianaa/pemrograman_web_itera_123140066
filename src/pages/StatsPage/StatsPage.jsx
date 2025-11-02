import React from 'react';
import { BookOpen } from 'lucide-react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';
import StatsCard from '../../Components/StatsCard/StatsCard';
import './StatsPage.css';

const StatsPage = () => {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <div className="container">
      <h1 className="heading">Statistik</h1>
      <p className="subheading">Ringkasan koleksi</p>

      <div className="stats-grid">
        <StatsCard icon="📚" label="Total" value={stats.total} color="#ffaec9" />
        <StatsCard icon="✓" label="Dimiliki" value={stats.owned} color="#ff9ebb" />
        <StatsCard icon="📖" label="Dibaca" value={stats.reading} color="#ffb3c6" />
        <StatsCard icon="♡" label="Wishlist" value={stats.wishlist} color="#ffc2d4" />
      </div>

      {books.length > 0 && (
        <div className="recent-section">
          <h3 className="section-title">Terbaru</h3>
          <div className="recent-list">
            {books.slice(-5).reverse().map(book => (
              <div key={book.id} className="recent-item">
                <BookOpen size={16} color="#ffaec9" />
                <div className="recent-info">
                  <span className="recent-title">{book.title}</span>
                  <span className="recent-author">{book.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsPage;