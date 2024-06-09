import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { SocialIcons } from "./SocialIcons";
import { Logo } from "./Logo";
import { info } from "@/data/info";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
        <Logo placeholder="footer" />
        <SocialIcons
          instagram={info.social.instagram}
          youtube={info.social.youtube}
          facebook={info.social.youtube}
        />
      </div>
      <div className="col-span-1 text-lg">
        <h4 className="text-3xl font-medium mb-6">Clinic Hours</h4>
        <div>
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <MdAccessTimeFilled className="h-5 w-5" />
              <span>Monday to Saturday 10:00 AM - 10:00 PM</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <MdAccessTimeFilled className="h-5 w-5" />
              <span>Sunday Off</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 ">
        <h4 className="text-3xl font-medium mb-6">Contacts</h4>
        <div className="text-lg">
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <IoCall className="h-5 w-5" />
              <span>+91 {info.contact.mobile}</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <FaWhatsapp className="h-5 w-5" />
              <span>+91 {info.contact.whatsapp}</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <MdEmail className="h-5 w-5" />
              <span>{info.contact.email}</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <FaLocationDot className="self-start mt-1 h-5 w-5" />
              <span>{info.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
