import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
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
          <FaInstagramSquare className="h-8 w-8" />
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
