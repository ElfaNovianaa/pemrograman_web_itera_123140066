import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/uselocalStorage';
// import useLocalStorage from '..uselocalStorage';

const BookContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setBooks([...books, newBook]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, ...updatedBook } : book
    ));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book => {
    const matchesStatus = filterStatus === 'all' || book.status === filterStatus;
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const value = {
    books,
    filteredBooks,
    filterStatus,
    setFilterStatus,
    searchQuery,
    setSearchQuery,
    addBook,
    updateBook,
    deleteBook
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};