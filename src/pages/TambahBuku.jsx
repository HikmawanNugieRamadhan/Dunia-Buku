import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Tambah ini
import FormBuku from "../components/FormBuku";
import { generateId } from "../utils/generateId";

const TambahBuku = ({ onAdd, totalBooks }) => {
  const navigate = useNavigate(); // ⬅️ Inisialisasi

  const handleSubmit = (data) => {
    const newBook = {
      ...data,
      id: generateId(totalBooks),
    };
    onAdd(newBook);

    // ⬅️ Setelah tambah, pindah ke halaman utama
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-8">
      <FormBuku onSubmit={handleSubmit} />
    </div>
  );
};

export default TambahBuku;