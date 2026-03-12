export const secondsUntilMidnightArgentina = () => {
  const now = new Date();

  const argentinaNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }),
  );

  const midnight = new Date(argentinaNow);
  midnight.setHours(24, 0, 0, 0);

  return Math.floor((midnight.getTime() - argentinaNow.getTime()) / 1000);
};
