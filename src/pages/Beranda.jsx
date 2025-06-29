import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KartuBuku from "../components/KartuBuku";

const Beranda = ({ books, onDelete, onEditClick }) => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("Semua");
  const [sortBy, setSortBy] = useState("judulAsc");

  const handleEdit = (id) => {
    onEditClick(id);
    navigate("/edit");
  };

  const filteredBooks = books
    .filter((book) => {
      const matchSearch =
        book.judul.toLowerCase().includes(search.toLowerCase()) ||
        book.pengarang.toLowerCase().includes(search.toLowerCase());

      const matchGenre =
        filterGenre === "Semua" || book.genre === filterGenre;

      return matchSearch && matchGenre;
    })
    .sort((a, b) => {
      if (sortBy === "judulAsc") return a.judul.localeCompare(b.judul);
      if (sortBy === "judulDesc") return b.judul.localeCompare(a.judul);
      if (sortBy === "tahunAsc") return a.tahunTerbit - b.tahunTerbit;
      if (sortBy === "tahunDesc") return b.tahunTerbit - a.tahunTerbit;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f5f7fa] to-[#eaeef5] rounded-xl p-8 text-center shadow mb-10">
        <img
          src="/assets/logos/LG-DuniaBuku.svg"
          alt="Book Icon"
          className="w-20 h-20 mx-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B2E4A] mt-4">
          Selamat Datang di <span className="text-[#E84545]">DuniaBuku</span>!
        </h1>
        <p className="mt-3 text-[#53354A] max-w-2xl mx-auto">
          Temukan, simpan, dan atur koleksi buku favoritmu dengan mudah dan gratis.
        </p>
      </section>

      {/* Control Panel */}
      <section className="bg-white shadow-sm rounded-xl p-4 mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Cari judul atau pengarang..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2 flex-wrap justify-between md:justify-end">
          <select
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="Semua">Semua Genre</option>
            {Array.from(new Set(books.map((b) => b.genre))).map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="judulAsc">Judul A-Z</option>
            <option value="judulDesc">Judul Z-A</option>
            <option value="tahunAsc">Tahun Terlama</option>
            <option value="tahunDesc">Tahun Terbaru</option>
          </select>
          <button
            onClick={() => setEditMode((prev) => !prev)}
            className="px-4 py-2 bg-[#2B2E4A] hover:bg-[#1f2037] text-white rounded-lg"
          >
            {editMode ? "Selesai Edit" : "Edit Mode"}
          </button>
        </div>
      </section>

      {/* Buku Section */}
      <section>
        {books.length === 0 ? (
          <div className="text-center py-12">
            <img
              src="/assets/logos/sad.svg"
              alt="Sad Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-[#2B2E4A]">
              Yah... kamu belum punya koleksi buku
            </h2>
            <button
              onClick={() => navigate("/tambah")}
              className="mt-4 px-4 py-2 bg-[#E84545] hover:bg-[#d63c3c] text-white rounded-md shadow"
            >
              Tambah Buku
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-[#2B2E4A] mb-4">Koleksi Buku Kamu</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {filteredBooks.map((book) => (
                <KartuBuku
                  key={book.id}
                  book={book}
                  onEdit={handleEdit}
                  onDelete={onDelete}
                  editMode={editMode}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Tambah Buku Mengambang */}
      <button
        onClick={() => navigate("/tambah")}
        className="fixed bottom-6 right-6 bg-[#E84545] hover:bg-[#d63c3c] text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        + Tambah Buku
      </button>
    </div>
  );
};

export default Beranda;