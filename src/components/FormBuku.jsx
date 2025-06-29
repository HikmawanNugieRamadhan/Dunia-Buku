import React, { useState, useEffect } from "react";
import { genres } from "../data/genres";

const FormBuku = ({ mode = "add", initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    judul: "",
    pengarang: "",
    tahunTerbit: "",
    genre: "",
    gambar: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "judul" || name === "pengarang") && /[^a-zA-Z0-9\s]/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "tahunTerbit" ? value.replace(/\D/, "") : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        gambar: imageURL,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { judul, pengarang, tahunTerbit, genre, gambar } = formData;

    if (!judul || !pengarang || !tahunTerbit || !genre || !gambar) {
      alert("Semua field termasuk gambar harus diisi!");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <h2 className="text-xl font-bold text-[#2B2E4A] text-center">
        {mode === "edit" ? "Edit Buku" : "Tambah Buku"}
      </h2>

      {/* Judul */}
      <div>
        <label className="block text-sm font-medium text-[#2B2E4A] mb-1">Judul Buku</label>
        <input
          type="text"
          name="judul"
          value={formData.judul}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B2E4A]"
          placeholder="Contoh: Laskar Pelangi"
        />
      </div>

      {/* Pengarang */}
      <div>
        <label className="block text-sm font-medium text-[#2B2E4A] mb-1">Pengarang</label>
        <input
          type="text"
          name="pengarang"
          value={formData.pengarang}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B2E4A]"
          placeholder="Contoh: Andrea Hirata"
        />
      </div>

      {/* Tahun Terbit */}
      <div>
        <label className="block text-sm font-medium text-[#2B2E4A] mb-1">Tahun Terbit</label>
        <input
          type="text"
          name="tahunTerbit"
          maxLength={4}
          value={formData.tahunTerbit}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B2E4A]"
          placeholder="Contoh: 2005"
        />
      </div>

      {/* Genre */}
      <div>
        <label className="block text-sm font-medium text-[#2B2E4A] mb-1">Genre</label>
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B2E4A]"
        >
          <option value="">-- Pilih Genre --</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Gambar Buku */}
      <div>
        <label className="block text-sm font-medium text-[#2B2E4A] mb-1">Cover Buku</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
        {formData.gambar && (
          <div className="mt-3">
            <img
              src={formData.gambar}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}
      </div>

      {/* Tombol */}
      <button
        type="submit"
        className="w-full bg-[#E84545] hover:bg-[#c73838] text-white font-semibold py-2 rounded-md transition"
      >
        {mode === "edit" ? "Simpan Perubahan" : "Tambah Buku"}
      </button>
    </form>
  );
};

export default FormBuku;