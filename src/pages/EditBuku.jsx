import React from "react";
import FormBuku from "../components/FormBuku";
import { useNavigate } from "react-router-dom";

const EditBuku = ({ bookToEdit, onEdit }) => {
  const navigate = useNavigate();

  // Jika belum ada data buku yang akan diedit, redirect ke beranda
  if (!bookToEdit) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl text-red-600 font-semibold">
          Buku tidak ditemukan atau belum dipilih untuk diedit.
        </h2>
        <button
          className="mt-4 px-4 py-2 bg-[#E84545] text-white rounded-md shadow"
          onClick={() => navigate("/")}
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

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