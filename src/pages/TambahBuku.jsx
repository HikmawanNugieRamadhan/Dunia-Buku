/**
 * Komponen TambahBuku
 *
 * Halaman untuk menambahkan buku baru ke dalam koleksi.
 * Menggunakan komponen `FormBuku` untuk mengisi data buku, kemudian data dikirimkan ke state utama aplikasi.
 *
 * Props:
 * - onAdd: Fungsi untuk menambahkan buku baru ke state utama aplikasi
 * - totalBooks: Jumlah buku saat ini, digunakan untuk membuat ID unik
 *
 * Fitur:
 * - Menggunakan `generateId` untuk membuat ID buku otomatis (format: BK001, BK002, dst.)
 * - Setelah berhasil menambahkan buku, langsung diarahkan ke halaman beranda
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { getBooks, saveBooks } from "../utils/localStorage";
import { generateId } from "../utils/generateId";
import FormBuku from "../components/FormBuku";

const TambahBuku = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const books = getBooks(); // Ambil data dari localStorage
    const newBook = {
      ...data,
      id: generateId(books.length), //pakai generateId(lastIndex)
    };

    const updatedBooks = [...books, newBook];
    saveBooks(updatedBooks); // Simpan ke localStorage
    alert("Buku berhasil ditambahkan!");
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-8">
      <FormBuku onSubmit={handleSubmit} />
    </div>
  );
};

export default TambahBuku;