export const generateShortId = (length = 5) => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return Array.from(array)[0].toString(36).toUpperCase().slice(0, length);
};
