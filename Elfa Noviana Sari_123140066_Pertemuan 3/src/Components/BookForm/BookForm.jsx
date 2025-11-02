import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useBooks } from '../../context/BookContext';
import './BookForm.css';

const BookForm = ({ bookToEdit, onClose }) => {
  const { addBook, updateBook } = useBooks();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    status: 'milik'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (bookToEdit) {
      setFormData({
        title: bookToEdit.title,
        author: bookToEdit.author,
        status: bookToEdit.status
      });
    }
  }, [bookToEdit]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Judul wajib diisi';
    }
    if (!formData.author.trim()) {
      newErrors.author = 'Penulis wajib diisi';
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (bookToEdit) {
      updateBook(bookToEdit.id, formData);
    } else {
      addBook(formData);
    }

    setFormData({ title: '', author: '', status: 'milik' });
    setErrors({});
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="form-title">
          {bookToEdit ? 'Edit Buku' : 'Tambah Buku Baru'}
        </h3>
        {onClose && (
          <button onClick={onClose} className="close-btn">
            <X size={18} />
          </button>
        )}
      </div>
      
      <div className="form">
        <div className="form-group">
          <label className="label">Judul</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`input ${errors.title ? 'input-error' : ''}`}
            placeholder="e.g., The Great Gatsby"
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label className="label">Penulis</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`input ${errors.author ? 'input-error' : ''}`}
            placeholder="e.g., F. Scott Fitzgerald"
          />
          {errors.author && <span className="error-text">{errors.author}</span>}
        </div>

        <div className="form-group">
          <label className="label">Status</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="status"
                value="milik"
                checked={formData.status === 'milik'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-text">Dimiliki</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="status"
                value="baca"
                checked={formData.status === 'baca'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-text">Dibaca</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="status"
                value="beli"
                checked={formData.status === 'beli'}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="radio-text">Wishlist</span>
            </label>
          </div>
        </div>

        <button onClick={handleSubmit} className="submit-btn">
          {bookToEdit ? 'Simpan Perubahan' : 'Tambah Buku'}
        </button>
      </div>
    </div>
  );
};

export default BookForm;