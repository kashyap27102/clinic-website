import Image from "next/image";
import Link from "next/link";
import InstaIcon from "@/public/instagram.svg"
import { FaFacebook, FaYoutube } from "react-icons/fa6";

export const SocialIcons = ({
  instagram,
  youtube,
  facebook,
}: {
  instagram?: string;
  youtube?: string;
  facebook?: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      {instagram && (
        <Link href={instagram} target="_blank">
          <Image src={InstaIcon} alt="physiotherapeutic-instagram-account"
          width={30} height={30}/>
        </Link>
      )}
      {youtube && (
        <Link href={youtube} target="_blank">
          <FaYoutube className="h-8 w-8" />
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target="_blank">
          <FaFacebook className="h-8 w-8" />
        </Link>
      )}
    </div>
  );
};
