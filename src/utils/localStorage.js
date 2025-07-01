const STORAGE_KEY = "duniabuku_books";

export const getBooks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveBooks = (books) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};

//Hanya isi dummy jika belum ada data tersimpan
export const initBooks = (dummyBooks) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    saveBooks(dummyBooks);
  }
};