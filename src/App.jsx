import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Beranda from "./pages/Beranda";
import TambahBuku from "./pages/TambahBuku";
import EditBuku from "./pages/EditBuku";
import { initBooks } from "./utils/localStorage";
import { books as dummyBooks } from "./data/books";

// Inisialisasi data buku ke localStorage (hanya sekali saat awal)
// Jika localStorage belum ada data buku, maka simpan dummyBooks sebagai data awal
initBooks(dummyBooks);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Header />
        <Routes>
          {/* Ganti Route dibawah dengan perulangan dari routes.tsx */}
          <Route path="/" element={<Beranda />} />
          <Route path="/tambah" element={<TambahBuku />} />
          <Route path="/edit/:id" element={<EditBuku />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;