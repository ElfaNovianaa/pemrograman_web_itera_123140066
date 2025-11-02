import React from 'react';
import { Search } from 'lucide-react';
import { useBooks } from '../../context/BookContext';
import './BookFilter.css';

const BookFilter = () => {
  const { filterStatus, setFilterStatus, searchQuery, setSearchQuery } = useBooks();

  return (
    <div className="filter-container">
      <div className="search-box">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari buku..."
          className="search-input"
        />
      </div>

      <div className="filter-chips">
        {['all', 'milik', 'baca', 'beli'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`chip ${filterStatus === status ? 'chip-active' : ''}`}
          >
            {status === 'all' ? 'Semua' : 
             status === 'milik' ? 'Dimiliki' : 
             status === 'baca' ? 'Dibaca' : 'Wishlist'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookFilter;