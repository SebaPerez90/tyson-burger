export const applyDiscount = (price: number, discountPercent = 0) => {
  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = Math.round(price - discountAmount); // redondeamos
  return { price, finalPrice, discountPercent };
};
