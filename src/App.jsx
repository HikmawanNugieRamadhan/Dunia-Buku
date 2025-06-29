import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import TambahBuku from "./pages/TambahBuku";
import EditBuku from "./pages/EditBuku";
import Header from "./components/Header";
import { books as initialBooks } from "./data/books";

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleTambahBuku = (newBook) => {
    setBooks([...books, newBook]);
    alert("Buku berhasil ditambahkan!");
  };

  const handleEditBuku = (updatedBook) => {
    const updatedList = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedList);
    alert("Buku berhasil diperbarui!");
  };

  const handleDeleteBook = (id) => {
    const filtered = books.filter((book) => book.id !== id);
    setBooks(filtered);
    alert("Buku berhasil dihapus!");
  };

  const startEdit = (id) => {
    const book = books.find((b) => b.id === id);
    setBookToEdit(book);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Header />

        <Routes>
          {/* Gabungan Beranda + Koleksi Buku */}
          <Route
            path="/"
            element={
              <Beranda
                books={books}
                onDelete={handleDeleteBook}
                onEditClick={startEdit}
              />
            }
          />

          {/* Halaman Tambah Buku */}
          <Route
            path="/tambah"
            element={
              <TambahBuku
                onAdd={handleTambahBuku}
                totalBooks={books.length}
              />
            }
          />

          {/* ✅ Halaman Edit Buku */}
          <Route
            path="/edit"
            element={
              <EditBuku bookToEdit={bookToEdit} 
              onEdit={handleEditBuku} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;