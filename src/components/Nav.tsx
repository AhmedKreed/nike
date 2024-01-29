"use client";
import Image from "next/image";
import Link from "next/link";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
const Nav = () => {
  const [toggleLinks, setToggleLinks] = useState(true);
  const handleClick = () => setToggleLinks(!toggleLinks);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"#"}>
          <Image src={headerLogo} alt={"Logo"} width={130} height={29}></Image>
        </Link>
        <ul
          className={
            toggleLinks
              ? `flex-1 flex justify-center items-center gap-16 max-lg:hidden`
              : `absolute flex flex-col w-full top-[90px] z-10 left-1/2 -translate-x-1/2 padding-x bg-white shadow-xl sm:w-4/5 sm:px-5`
          }
        >
          {navLinks.map((link) => (
            <li key={link.label} className={toggleLinks ? `` : `py-5 `}>
              <Link
                href={link.href}
                className={
                  toggleLinks
                    ? `font-montserrat leading-normal text-lg text-slate-gray`
                    : `py-5 transition-all duration-200 hover:pl-3 font-montserrat leading-normal text-lg text-slate-gray`
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <Link href={"#"}>Sign in</Link>
          <span>/</span>
          <Link href={"#"}>Explore now</Link>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={handleClick}>
          <Image src={hamburger} alt={"Hamburger"} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
