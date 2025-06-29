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
import { useNavigate } from "react-router-dom"; // Tambah ini
import FormBuku from "../components/FormBuku";
import { generateId } from "../utils/generateId";

const TambahBuku = ({ onAdd, totalBooks }) => {
  const navigate = useNavigate(); // Inisialisasi

  const handleSubmit = (data) => {
    const newBook = {
      ...data,
      id: generateId(totalBooks),
    };
    onAdd(newBook);

    // Setelah tambah, pindah ke halaman utama
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-8">
      <FormBuku onSubmit={handleSubmit} />
    </div>
  );
};

export default TambahBuku;