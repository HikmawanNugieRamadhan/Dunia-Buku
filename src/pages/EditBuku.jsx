/**
 * Komponen EditBuku
 *
 * Halaman untuk mengedit data buku yang telah ditambahkan sebelumnya.
 * Menggunakan komponen `FormBuku` dengan data awal (`initialData`) dari buku yang dipilih.
 *
 * Props:
 * - bookToEdit: Objek buku yang akan diedit (berisi id, judul, pengarang, tahunTerbit, genre, gambar)
 * - onEdit: Fungsi untuk memperbarui data buku di state utama aplikasi
 *
 * Fitur:
 * - Menampilkan form dengan data awal dari buku
 * - Setelah diedit, data dikirimkan ke `onEdit`
 * - Otomatis kembali ke halaman utama setelah pengeditan selesai
 */

import React from "react";
import FormBuku from "../components/FormBuku";
import { useNavigate } from "react-router-dom";

const EditBuku = ({ bookToEdit, onEdit }) => {
  const navigate = useNavigate();

  const handleSubmit = (updatedData) => {
    const updatedBook = {
      ...updatedData,
      id: bookToEdit.id, // jaga ID tetap sama
    };
    onEdit(updatedBook);
    navigate("/"); // Setelah edit, kembali ke beranda
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