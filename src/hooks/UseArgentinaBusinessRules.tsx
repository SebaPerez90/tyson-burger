import { useEffect, useState } from "react";

export function useArgentinaBusinessRules() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, []);

  const argentinaDate = new Date(
    now.toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  );

  const day = argentinaDate.getDay();

  // 👉 Recargo lunes a miércoles
  const hasSurcharge = day === 1 || day === 2 || day === 3;

  return {
    day,
    hasSurcharge,
  };
}
