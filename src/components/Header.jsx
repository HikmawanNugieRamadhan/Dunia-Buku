/**
 * Komponen Header
 * 
 * Menampilkan header global aplikasi DuniaBuku yang berisi:
 * - Logo dan nama aplikasi
 * - Navigasi ke halaman Beranda dan Tambah Buku
 * 
 * Navigasi akan menyoroti halaman aktif berdasarkan `location.pathname`.
 * Desain responsif dengan penyesuaian ukuran padding dan font untuk mode mobile dan desktop.
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItem = (to, label) => (
    <Link
      to={to}
      className={`transition-all duration-200 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-sm sm:text-base ${
        location.pathname === to
          ? "bg-[#E84545]/10 text-[#E84545] font-semibold"
          : "text-[#2B2E4A] hover:bg-[#E84545]/10 hover:text-[#E84545]"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logos/LG-DuniaBuku.svg"
            alt="DuniaBuku Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-[#2B2E4A]">DuniaBuku</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-1 sm:gap-2">{navItem("/", "Beranda")}{navItem("/tambah", "Tambah Buku")}</nav>
      </div>
    </header>
  );
};

export default Header;