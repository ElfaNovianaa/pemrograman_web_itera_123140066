import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BookProvider, useBooks } from "./context/BookContext";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import StatsPage from "./pages/StatsPage/StatsPage";
import useBookStats from "./hooks/useBookStats";

// Mock data
const mockBooks = [
  { id: "1", title: "Harry Potter", author: "J.K Rowling", status: "milik", createdAt: new Date().toISOString() },
  { id: "2", title: "Hujan", author: "Tere Liye", status: "baca", createdAt: new Date().toISOString() },
  { id: "3", title: "Back to November", author: "Soldi Algaran", status: "beli", createdAt: new Date().toISOString() },
];

// Mock context BookContext
jest.mock("./context/BookContext", () => {
  const actual = jest.requireActual("./context/BookContext");
  return {
    ...actual,
    useBooks: jest.fn(),
  };
});

// Mock hook useBookStats
jest.mock("./hooks/useBookStats", () => jest.fn());

// Setup localStorage mock
beforeAll(() => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;
});

describe("Aplikasi Manajemen Buku", () => {
  
  beforeEach(() => {
    // Mock return value untuk useBooks
    useBooks.mockReturnValue({
      books: mockBooks,
      filteredBooks: mockBooks,
      addBook: jest.fn(),
      deleteBook: jest.fn(),
      updateBook: jest.fn(),
      searchQuery: '',
      setSearchQuery: jest.fn(),
      filterStatus: 'all',
      setFilterStatus: jest.fn(),
    });

    // Mock return value untuk useBookStats
    useBookStats.mockReturnValue({
      total: 3,
      owned: 1,
      reading: 1,
      wishlist: 1
    });
  });

  // Test 1: Render Halaman Home dan tampilkan buku
  test("Render Halaman Home dan tampilkan daftar buku", () => {
    render(
      <BookProvider>
        <HomePage />
      </BookProvider>
    );

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Hujan")).toBeInTheDocument();
    expect(screen.getByText("Back to November")).toBeInTheDocument();
  });

  // Test 2: Pencarian (Search)
  test("Filter pencarian berfungsi di Halaman Home", () => {
    const mockSetSearchQuery = jest.fn();
    
    useBooks.mockReturnValue({
      books: mockBooks,
      filteredBooks: [mockBooks[0]],
      addBook: jest.fn(),
      deleteBook: jest.fn(),
      updateBook: jest.fn(),
      searchQuery: 'Harry',
      setSearchQuery: mockSetSearchQuery,
      filterStatus: 'all',
      setFilterStatus: jest.fn(),
    });

    render(
      <BookProvider>
        <HomePage />
      </BookProvider>
    );

    const searchInput = screen.getByPlaceholderText(/cari buku/i);
    fireEvent.change(searchInput, { target: { value: "Harry Potter" } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith("Harry Potter");
  });

  // Test 3: Filter Status
  test("Filter status berfungsi di Halaman Home", () => {
    const mockSetFilterStatus = jest.fn();
    
    useBooks.mockReturnValue({
      books: mockBooks,
      filteredBooks: mockBooks,
      addBook: jest.fn(),
      deleteBook: jest.fn(),
      updateBook: jest.fn(),
      searchQuery: '',
      setSearchQuery: jest.fn(),
      filterStatus: 'all',
      setFilterStatus: mockSetFilterStatus,
    });

    render(
      <BookProvider>
        <HomePage />
      </BookProvider>
    );

    const dibacaButton = screen.getByRole('button', { name: /dibaca/i });
    fireEvent.click(dibacaButton);

    expect(mockSetFilterStatus).toHaveBeenCalledWith('baca');
  });

  // Test 4: Render Halaman Statistik
  test("Render Halaman Statistik dan tampilkan data", () => {
    render(
      <BookProvider>
        <StatsPage />
      </BookProvider>
    );

    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Dimiliki")).toBeInTheDocument();
    
    const allOnes = screen.getAllByText("1");
    expect(allOnes.length).toBeGreaterThanOrEqual(1);
  });

  // Test 5: Navigasi aplikasi
  test("Navigasi dari Beranda ke Statistik berfungsi", async () => {
    render(<App />);

    const allButtons = screen.getAllByRole('button');
    const berandaButton = allButtons.find(btn => btn.textContent.includes('Beranda'));
    const statistikButton = allButtons.find(btn => btn.textContent.includes('Statistik'));
    
    expect(berandaButton).toHaveClass('nav-btn-active');
    expect(statistikButton).not.toHaveClass('nav-btn-active');

    fireEvent.click(statistikButton);

    await waitFor(() => {
      expect(statistikButton).toHaveClass('nav-btn-active')
    });
  });

});