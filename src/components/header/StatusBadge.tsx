"use client";

import { useEffect, useMemo, useState } from "react";

export const OpenStatusBadge = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Calcula todo el estado derivado desde `time`
  const { isOpen, isWorkDay } = useMemo(() => {
    const argentinaOffset = -3 * 60; // UTC-3
    const localTime = new Date(time.getTime() + argentinaOffset * 60 * 1000);

    const day = localTime.getUTCDay();
    const hour = localTime.getUTCHours();
    const minute = localTime.getUTCMinutes();

    const workDays = [4, 5, 6, 0]; //en caso de agregar dias de servicio, el array debe actualizarse a [1,2,3,4,5,6,0] por ejemplo
    const openHour = 20;
    const closeHour = 23;
    const closeMinute = 30;

    const workingToday = workDays.includes(day);
    const isOpenNow =
      workingToday &&
      ((hour > openHour && hour < closeHour) ||
        (hour === openHour && minute >= 0) ||
        (hour === closeHour && minute <= closeMinute));

    return { isOpen: isOpenNow, isWorkDay: workingToday };
  }, [time]);

  // UI derivada del estado
  const color = isOpen ? "bg-green-500" : "bg-red-500";
  const text = isOpen
    ? "Estamos trabajando"
    : isWorkDay
    ? "Abre a las 20:00 hs"
    : "Cerrado";

  return (
    <div className="select-none flex items-center space-x-2 bg-background/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-background/10 shadow-sm">
      <span
        className={`size-3 ${color} rounded-full animate-pulse shadow-[0_0_6px_rgba(0,0,0,0.3)]`}
      ></span>
      <p className="text-background font-medium text-sm">{text}</p>
    </div>
  );
};

export default OpenStatusBadge;
