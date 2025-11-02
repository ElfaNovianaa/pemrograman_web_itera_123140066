import { useState, useEffect } from 'react';

/**
 * Custom Hook untuk menghitung statistik buku
 * @param {Array} books - Array of book objects
 * @returns {Object} - Statistics object
 */
const useBookStats = (books) => {
  const [stats, setStats] = useState({
    total: 0,
    owned: 0,
    reading: 0,
    wishlist: 0
  });

  useEffect(() => {
    const newStats = {
      total: books.length,
      owned: books.filter(b => b.status === 'milik').length,
      reading: books.filter(b => b.status === 'baca').length,
      wishlist: books.filter(b => b.status === 'beli').length
    };
    setStats(newStats);
  }, [books]);

  return stats;
};

export default useBookStats;