"use client";

import { useId } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon?: React.ReactNode;
};

export default function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  icon = <BsCurrencyDollar />,
}: Props) {
  const id = useId();

  return (
    <div className="relative w-full">
      {/* input */}
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          peer block cursor-pointer w-full border border-white/25 rounded-lg 
          bg-transparent text-white text-base 
          px-10 py-3 outline-none transition-all
          focus:border-white
        `}
      />

      {/* icon */}
      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white pointer-events-none">
        {icon}
      </span>

      {/* label flotante con fondo */}
      <label
        htmlFor={id}
        className={`
          absolute left-10 text-sm text-white transition-all duration-200 ease-out
          px-2 pointer-events-none bg-zinc-900 font-semibold
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-[20%]
          peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-x-6 peer-focus:-translate-y-[5%] peer-focus:text-sm peer-focus:text-white -mt-[0.6rem]
          ${
            value
              ? "top-0 -translate-y-[5%]  -translate-x-6 text-sm text-white"
              : ""
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}
