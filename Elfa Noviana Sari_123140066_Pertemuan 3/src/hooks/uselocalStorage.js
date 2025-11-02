import { useState, useEffect } from 'react';

/**
 * Custom Hook untuk menyimpan state di localStorage
 * @param {string} key - Key untuk localStorage
 * @param {any} initialValue - Nilai default jika key tidak ada
 * @returns {[any, Function]} - [value, setValue]
 */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;