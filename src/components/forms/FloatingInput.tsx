"use client";

import { useEffect, useId } from "react";

type Props = {
  name?: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function FloatingInput({
  name,
  label,
  value,
  onChange,
  type = "text",
  icon,
  className,
}: Props) {
  const id = useId();

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLInputElement && target.type === "number") {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", handler, {
      passive: false,
      capture: true,
    });
    return () => {
      document.removeEventListener("wheel", handler);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* input */}
      <input
        id={id}
        name={name}
        type={type}
        placeholder=" "
        value={value}
        min={type === "number" ? 0 : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`
          ${icon ? "px-10 " : "px-5"}
          peer block cursor-pointer w-full border border-white/25 rounded-lg 
          bg-transparent text-white text-base 
           py-3 outline-none transition-all
          focus:border-white ${className}
        `}
      />

      {/* icon */}
      {icon && (
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white pointer-events-none">
          {icon}
        </span>
      )}

      {/* label flotante con fondo */}
      <label
        htmlFor={id}
        className={`
        ${
          icon
            ? "left-10 peer-focus:-translate-x-6"
            : "left-5 peer-focus:-translate-x-1"
        }
          absolute  text-sm text-white transition-all duration-200 ease-out
          px-2 pointer-events-none bg-zinc-900 font-semibold
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-[20%]
          peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-y-[5%] peer-focus:text-sm peer-focus:text-white -mt-[0.6rem]
          ${
            value && icon
              ? "top-0 -translate-y-[3%] -translate-x-6 text-sm text-white"
              : value || icon === null || undefined
              ? "top-0 -translate-y-[3%] -translate-x-1 text-sm text-white"
              : ""
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}
