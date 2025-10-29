"use client";

import { useState, useEffect } from "react";

export const StoreStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      // Obtener fecha y hora actual de Argentina
      const now = new Date();
      const options = { timeZone: "America/Argentina/Buenos_Aires" };
      const localTime = new Date(now.toLocaleString("en-US", options));

      const day = localTime.getDay(); // 0=Domingo, 1=Lunes, ..., 6=Sábado
      const hour = localTime.getHours();
      const minute = localTime.getMinutes();

      // Días de trabajo: Jueves (4), Viernes (5), Sábado (6), Domingo (0)
      const workingDays = [4, 5, 6, 0];

      // Horario comercial: 20:00 a 23:30
      const isWorkingDay = workingDays.includes(day);
      const isWorkingHour =
        hour === 20 ||
        hour === 21 ||
        hour === 22 ||
        (hour === 23 && minute <= 30);

      setIsOpen(isWorkingDay && isWorkingHour);
    };

    // Chequeo inicial
    checkIfOpen();

    // Actualiza cada minuto (por si el usuario deja la pestaña abierta)
    const interval = setInterval(checkIfOpen, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-md transition-all
        ${isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
    >
      <span
        className={`w-3 h-3 rounded-full animate-pulse 
          ${isOpen ? "bg-green-500" : "bg-red-500"}`}
      ></span>
      <span>{isOpen ? "Estamos trabajando 🍔" : "Cerrado"}</span>
    </div>
  );
};

export default StoreStatus;
