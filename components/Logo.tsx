import Image from "next/image";
import logo1 from "@/public/Logo/Logo-color.svg";
import logo2 from "@/public/Logo/Logo-white.svg";
import Link from "next/link";

export const Logo = ({ placeholder }: { placeholder: "navbar" | "footer" }) => {
  return placeholder === "navbar" ? (
    <Link href={"/"}>
      <Image
        src={logo1}
        alt="the-physiotherapeutic-clinic"
        height={100}
        width={200}
      />
    </Link>
  ) : (
    <Link href={"/"}>
      <Image
        src={logo2}
        alt="the-physiotherapeutic-clinic"
        height={300}
        width={300}
      />
    </Link>
  );
};
