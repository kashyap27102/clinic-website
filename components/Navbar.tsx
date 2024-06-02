"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import { IoCall } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarSlider } from "./NavbarSlider";

export const Navbar = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const closeHandler = () => {
    setOpenNavigation(false);
  };

  return (
    <div>
      <div className="bg-light p-6 shadow-lg lg:sticky lg:top-0 w-full z-40">
        <div className="md:w-4/5 mx-auto flex items-center justify-between">
          <div>
            <Logo placeholder='navbar'/>
          </div>
          <nav className=" hidden lg:flex items-center gap-4">
            <ul className="flex gap-4 font-medium text-lg">
              <li
                className={`hover:text-primary ${
                  pathname === "/" && "text-primaryDark"
                }`}
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/about" && "text-primaryDark"
                }`}
              >
                <Link href={"/about"}>About</Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/treatments" && "text-primaryDark"
                }`}
              >
                <Link href={"/treatments"}>Treatments</Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/gallery" && "text-primaryDark"
                }`}
              >
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li
                className={`hover:text-primary ${
                  pathname === "/contact-us" && "text-primaryDark"
                }`}
              >
                <Link href={"/contact-us"}>Contact us</Link>
              </li>
            </ul>
            <button className="bg-primary hover:bg-primaryDark py-2 px-4 rounded-full text-white flex gap-2 shadow-md">
              <IoCall className="h-5 w-5" />
              (+91) 9727162550
            </button>
          </nav>
          {/* Mobile and Tablets  View*/}
          <nav className="flex lg:hidden">
            <GiHamburgerMenu
              className="h-6 w-6 text-primary cursor-pointer"
              onClick={() => setOpenNavigation(true)}
            />
            {openNavigation && <NavbarSlider onClose={closeHandler} />}
          </nav>
        </div>
      </div>
    </div>
  );
};
