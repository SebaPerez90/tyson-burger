"use client";

import { FaUser } from "react-icons/fa";
import FloatingInput from "../forms/FloatingInput";

interface Props {
  userName: string;
  setUserName: (userName: string) => void;
  userPhone: string;
  setUserPhone: (userPhone: string) => void;
}

const UserDataCheckout = ({
  userName,
  setUserName,
  userPhone,
  setUserPhone,
}: Props) => {
  return (
    <div className="border border-white/30 p-5 rounded-xl text-stone-50 w-full flex flex-col gap-6">
      <h2 className="font-bold flex items-center gap-2 text-lg">
        <FaUser />
        Tus datos
      </h2>

      {/* nombre */}
      <FloatingInput
        label="Nombre"
        type="text"
        value={userName}
        onChange={setUserName}
        className="capitalize"
      />

      {/* telefono */}
      <FloatingInput
        label="Teléfono"
        type="number"
        value={userPhone}
        onChange={setUserPhone}
      />
    </div>
  );
};

export default UserDataCheckout;
