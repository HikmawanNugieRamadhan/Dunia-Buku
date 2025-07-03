import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { initBooks } from "./utils/localStorage";
import { books as dummyBooks } from "./data/books";
import { appRoutes } from "./routes";

// Inisialisasi data buku ke localStorage (hanya sekali saat awal)
// Jika localStorage belum ada data buku, maka simpan dummyBooks sebagai data awal
initBooks(dummyBooks);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Header />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;