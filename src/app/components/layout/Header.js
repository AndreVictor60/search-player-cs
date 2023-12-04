"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Image src="/icon.ico" width={75} height={75} alt="logo seekPlayer"/>
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          SeekPlayer
        </Link>
      </nav>
    </header>
  );
};

export default Header;
