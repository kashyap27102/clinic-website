import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export const NavbarSlider = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-dark/50 h-screen absolute top-0 left-0 z-50 w-full">
      <div className="bg-white w-[300px] h-full p-4">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-primaryLight flex items-center p-2 rounded-md shadow-sm"
          >
            <IoMdArrowRoundBack className="h-5 w-5 text-primaryDark" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <li className={`hover:text-primary`}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-primary">
              <Link href={"/"}>Service</Link>
            </li>
            <li className="hover:text-primary">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li className="hover:text-primary">
              <Link href={"/contact-us"}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
