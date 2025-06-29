import React from "react";
import { Link } from "react-router-dom";

const KartuBuku = ({ book, onEdit, onDelete, editMode }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-3 flex flex-col items-center text-center hover:shadow-lg transition duration-200">
      <div className="w-full aspect-[2/3] bg-gray-200 rounded-lg mb-2 overflow-hidden flex items-center justify-center">
        <img
          src={book.gambar}
          alt={book.judul}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Judul */}
      <h2 className="text-sm font-semibold text-[#2B2E4A] line-clamp-1 mb-1">
        {book.judul}
      </h2>

      {/* Detail */}
      <div className="text-[11px] text-[#53354A] space-y-0.5">
        <p>👤 {book.pengarang}</p>
        <p>📅 {book.tahunTerbit}</p>
      </div>

      {/* Genre sebagai link */}
      <Link
        to={`/genre/${book.genre.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-xs font-medium text-[#903749] hover:underline mb-1"
      >
        {book.genre}
      </Link>

      {/* Tombol edit & hapus */}
      {editMode && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(book.id);
            }}
            className="text-xs px-3 py-1 bg-[#E84545] hover:bg-[#d63939] text-white rounded-md shadow-sm"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(book.id);
            }}
            className="text-xs px-3 py-1 bg-[#53354A] hover:bg-[#40303c] text-white rounded-md shadow-sm"
          >
            Hapus
          </button>
        </div>
      )}
    </div>
  );
};

export default KartuBuku;