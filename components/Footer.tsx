import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdAccessTime, MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { SocialIcons } from "./SocialIcons";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
        <Logo />
        <SocialIcons instagram="/" youtube="/" facebook="/" />
      </div>
      <div className="col-span-1 ">
        <h4 className="text-xl font-medium mb-6">Business Hours</h4>
        <div>
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <MdAccessTimeFilled className="h-5 w-5" />
              <span>Monday to Saturday 9:00 AM - 10:00 PM</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <MdAccessTimeFilled className="h-5 w-5" />
              <span>Sunday 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 md:">
        <h4 className="text-xl font-medium mb-6">Contacts</h4>
        <div>
          <ul>
            <li className="flex items-center gap-4 mb-2">
              <IoCall className="h-5 w-5" />
              <span>+91 9727162550</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <MdEmail className="h-5 w-5" />
              <span>physiothraputic99@gmail.com</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <FaLocationDot className="self-start mt-1 h-5 w-5" />
              <span>203, Keshav Aaradhyam, Kudasn Gandhinagar</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
