import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../../Components/BookForm/BookForm';
import BookFilter from '../../Components/BookFilter/BookFilter';
import BookList from '../../Components/BookList/BookList';

import './HomePage.css';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const { books } = useBooks();

  return (
    <div className="container">
      <header className="page-header">
        <div>
          <h1 className="heading">Koleksi Buku</h1>
          <p className="subheading">{books.length} buku dalam koleksi</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="primary-btn">
          <Plus size={16} />
          Tambah
        </button>
      </header>

      {showForm && (
        <div style={{ marginBottom: '1.5rem' }}>
          <BookForm onClose={() => setShowForm(false)} />
        </div>
      )}

      <BookFilter />
      <BookList />
    </div>
  );
};

export default HomePage;