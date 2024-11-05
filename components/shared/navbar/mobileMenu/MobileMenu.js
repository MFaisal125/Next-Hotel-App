// import Image from "next/image";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import LoadImage from "../../image/LoadImage";
import { useSelector } from "react-redux";
import { HiOutlineUser } from "react-icons/hi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state?.auth);

  return (
    <div className="relative">
      <button
        className="p-1.5 shadow rounded border-primary/20 border"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiOutlineUser className="text-lg" />
      </button>
      <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileMenu;
