# 📚 DuniaBuku

**DuniaBuku** adalah aplikasi perpustakaan digital sederhana berbasis React.js yang memungkinkan pengguna untuk menambah, mengedit, menghapus, dan mengelola koleksi buku pribadi secara intuitif. Desain modern dan responsif membuat aplikasi ini nyaman digunakan di berbagai perangkat.

---

## ✨ Fitur Utama

- ✅ Menambahkan buku lengkap dengan gambar, judul, pengarang, tahun, dan genre
- ✅ Mengedit dan menghapus buku yang sudah ada
- ✅ ID buku otomatis (misal: BK001, BK002)
- ✅ Pencarian buku berdasarkan judul atau pengarang
- ✅ Filter buku berdasarkan genre
- ✅ Sortir buku berdasarkan judul atau tahun terbit
- ✅ Mode Edit Toggle (untuk menghapus atau mengedit buku)
- ✅ Tampilan responsif (desktop, tablet, dan mobile)
- ✅ Feedback visual (notifikasi ketika buku berhasil ditambah/edit/hapus)
- ✅ Navigasi sederhana antar halaman menggunakan React Router
- ✅ Tampilan modern dengan Tailwind CSS dan palet warna custom
- ✅ Floating Button untuk menambah buku

---

## 🛠️ Teknologi yang Digunakan

- ⚛️ React.js
- 🎨 Tailwind CSS v3.4.17
- 🔀 React Router DOM
- 📦 Vite (atau Create React App, tergantung inisiasi awal)
- 🖼️ Asset lokal (SVG logo, ikon, gambar sampul)

---

## 📁 Struktur Folder
src/
│
├── assets/ # Logo dan ikon SVG
├── components/ # Komponen UI (FormBuku, KartuBuku, Header, dll)
├── pages/ # Halaman utama (Beranda, TambahBuku, EditBuku)
├── utils/ # Fungsi utilitas seperti generateId
└── App.jsx # Routing dan state utama


---

## 🚀 Cara Menjalankan

1. **Clone repo:**
git clone https://github.com/username/duniabuku.git

2. **Open Folder di Code Editor**
Klik Terminal > New Terminal
cd dunia-buku

3. **Jalankan Project**
npm start
