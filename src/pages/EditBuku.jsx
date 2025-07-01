/**
 * Komponen EditBuku
 *
 * Halaman untuk mengedit data buku yang telah ditambahkan sebelumnya.
 * Menggunakan komponen `FormBuku` dengan data awal (`initialData`) dari buku yang dipilih.
 *
 * Fitur:
 * - Menampilkan form dengan data awal dari buku
 * - Setelah diedit, data dikirim dan disimpan ke localStorage
 * - Otomatis kembali ke halaman utama setelah pengeditan selesai
 */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormBuku from "../components/FormBuku";
import { getBooks, saveBooks } from "../utils/localStorage";

const EditBuku = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookToEdit = location.state;

  // Jika data tidak dikirim dari navigasi, tampilkan pesan error
  if (!bookToEdit) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-lg text-red-600 font-semibold">
          Buku tidak ditemukan atau data kosong.
        </h2>
      </div>
    );
  }

  const handleSubmit = (updatedData) => {
    const books = getBooks();

    const updatedBook = {
      ...updatedData,
      id: bookToEdit.id, // Tetap pakai ID lama
    };

    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );

    saveBooks(updatedBooks);
    alert("Buku berhasil diperbarui!");
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-8">
      <FormBuku
        mode="edit"
        initialData={bookToEdit}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditBuku;