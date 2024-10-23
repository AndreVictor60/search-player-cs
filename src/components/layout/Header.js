"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      to: "/",
    },
    {
      id: 2,
      link: "Find player",
      to: "/find-player",
    },
    {
      id: 3,
      link: "Find name",
      to: "/find-name"
    }
  ];
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4 text-textLigth dark:text-textDark font-semibold">
        <div>
          <Image
            src="/images/seek_player.png"
            width={75}
            height={75}
            alt="logo seekPlayer"
          />
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, to }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-textLigth dark:text-textDark hover:scale-105 dark:hover:text-white duration-200 link-underline"
            >
              <Link href={to}>{link}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, to }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={to}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <nav className="flex items-center gap-4 font-semibold text-gray-500 mr-5">
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;