export const getArgentinaDayInfo = () => {
  // 👉 Detectar día actual (Argentina)
  const now = new Date();

  const argentinaDate = new Date(
    now.toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  );

  const day = argentinaDate.getDay();

  // 👉 Jueves (4) o Viernes (5)
  const isDiscountDay = day === 4 || day === 5;

  return {
    day,
    isDiscountDay,
  };
};
