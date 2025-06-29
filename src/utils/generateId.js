export const generateId = (lastIndex) => {
  const nextNumber = String(lastIndex + 1).padStart(3, '0'); // hasil: 001, 002, dst
  return `BK${nextNumber}`;
};