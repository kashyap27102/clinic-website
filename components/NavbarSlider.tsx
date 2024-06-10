import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export const NavbarSlider = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const onClickHandler = () => {
    onClose();
  };

  return (
    <div
      className={`bg-white w-[250px] md:w-[300px] p-6 md:p-10 h-screen fixed top-0 left-0 z-50 drop-shadow-2xl ${
        isOpen ? "animate-slideIn" : "animate-slideOut"
      }`}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-primaryLight flex items-center p-2 rounded-md shadow-sm"
        >
          <IoMdArrowRoundBack className="h-5 w-5 text-white" />
        </button>
      </div>
      <nav className="flex flex-col gap-4">
        <ul className="flex flex-col gap-4 text-lg font-semibold">
          <li
            className={`hover:text-primary hover:underline hover:underline-offset-2`}
          >
            <Link href={"/"} onClick={onClickHandler}>
              Home
            </Link>
          </li>
          <li className="hover:text-primary hover:underline hover:underline-offset-2">
            <Link href={"/about"} onClick={onClickHandler}>
              About
            </Link>
          </li>
          <li className="hover:text-primary hover:underline hover:underline-offset-2">
            <Link href={"/treatments"} onClick={onClickHandler}>
              Treatments
            </Link>
          </li>
          <li className="hover:text-primary hover:underline hover:underline-offset-2">
            <Link href={"/gallery"} onClick={onClickHandler}>
              Gallery
            </Link>
          </li>
          <li className="hover:text-primary hover:underline hover:underline-offset-2">
            <Link href={"/contact-us"} onClick={onClickHandler}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
