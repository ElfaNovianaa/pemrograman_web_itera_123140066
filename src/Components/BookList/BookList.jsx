import React, { useState } from 'react';
import { BookOpen, Edit2, Trash2 } from 'lucide-react';
import { useBooks } from '../../context/BookContext';
// import BookForm from './BookForm/BookForm';
import './BookList.css';
import BookForm from '../BookForm/BookForm';

const BookList = () => {
  const { filteredBooks, deleteBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);

  const getStatusColor = (status) => {
    const colors = {
      milik: '#ffc2d4',
      baca: '#ffb3c6',
      beli: '#ffd4e5'
    };
    return colors[status];
  };

  const getStatusLabel = (status) => {
    const labels = {
      milik: 'Dimiliki',
      baca: 'Dibaca',
      beli: 'Wishlist'
    };
    return labels[status];
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Hapus "${title}"?`)) {
      deleteBook(id);
    }
  };

  if (filteredBooks.length === 0) {
    return (
      <div className="empty-state">
        <BookOpen size={40} style={{ color: '#ffc2d4', marginBottom: '0.75rem' }} />
        <p className="empty-text">Belum ada buku</p>
        <p className="empty-hint">Tambahkan buku pertamamu</p>
      </div>
    );
  }

  return (
    <>
      <div className="book-scroll-wrapper">
        <div className="book-list">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-icon">
                <BookOpen size={20} color="#ffaec9" />
              </div>
              
              <div className="book-info">
                <h4 className="book-title">{book.title}</h4>
                <p className="book-author">{book.author}</p>
                <span 
                  className="status-label"
                  style={{ backgroundColor: getStatusColor(book.status) }}
                >
                  {getStatusLabel(book.status)}
                </span>
              </div>

              <div className="book-actions">
                <button
                  onClick={() => setEditingBook(book)}
                  className="icon-btn"
                  title="Edit"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => handleDelete(book.id, book.title)}
                  className="icon-btn delete-btn"
                  title="Hapus"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editingBook && (
        <div className="modal" onClick={() => setEditingBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <BookForm bookToEdit={editingBook} onClose={() => setEditingBook(null)} />
          </div>
        </div>
      )}
    </>
  );
};

export default BookList;