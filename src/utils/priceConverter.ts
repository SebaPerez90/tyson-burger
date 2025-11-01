/**
 * Convierte un string tipo "$ 9.000" | "$9.000" | "9.000" | "9.000,50" a number (ej: 9000 o 9000.5)
 * Maneja puntos como separador de miles y coma como separador decimal.
 */
export function parsePriceStringToNumber(priceStr: string): number {
  if (!priceStr && priceStr !== "0") return 0;
  // eliminar todo lo que no sea dígito, punto, coma o signo menos
  const cleaned = String(priceStr)
    .replace(/[^\d.,-]/g, "")
    .trim();

  if (cleaned === "") return 0;

  // Si contiene tanto punto como coma, asumimos que el punto es separador de miles y la coma decimal.
  // Ej: "1.234,56" -> "1234.56"
  if (cleaned.includes(".") && cleaned.includes(",")) {
    const withoutDots = cleaned.replace(/\./g, "");
    const normalized = withoutDots.replace(",", ".");
    return Number(parseFloat(normalized)) || 0;
  }

  // Si tiene solo coma -> puede ser decimal "1234,56"
  if (cleaned.includes(",") && !cleaned.includes(".")) {
    const normalized = cleaned.replace(",", ".");
    return Number(parseFloat(normalized)) || 0;
  }

  // Si tiene solo puntos -> los tratamos como separador de miles (ej "12.345" -> 12345)
  if (cleaned.includes(".") && !cleaned.includes(",")) {
    const withoutDots = cleaned.replace(/\./g, "");
    return Number(parseFloat(withoutDots)) || 0;
  }

  // Ni punto ni coma -> número directo
  return Number(parseFloat(cleaned)) || 0;
}

/**
 * Formatea un número entero o decimal a string con separador de miles usando punto.
 * Ej: 12345 -> "12.345", 12345.5 -> "12.345,5" (opcionalmente cambiá la coma si querés punto decimal)
 *
 * Aquí devolvemos decimal con coma (estilo $12.345,50). Si preferís siempre punto decimal,
 * cambiá la linea correspondiente.
 */
export function formatNumberWithDot(n: number, keepDecimals = false): string {
  if (Number.isNaN(n)) return "0";
  const abs = Math.abs(n);
  const intPart = Math.trunc(abs).toString();
  // agrupar miles con punto
  const intWithDots = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (!keepDecimals) return (n < 0 ? "-" : "") + intWithDots;
  const decimals = Math.round((abs - Math.trunc(abs)) * 100); // 2 decimales
  if (decimals === 0) return (n < 0 ? "-" : "") + intWithDots;
  // devolver con coma decimal (estilo local) — cambialo si querés usar punto decimal
  return (
    (n < 0 ? "-" : "") +
    `${intWithDots},${decimals.toString().padStart(2, "0")}`
  );
}
