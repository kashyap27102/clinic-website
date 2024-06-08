import { FaStar } from "react-icons/fa6";
import GoogleIcon from "@/public/google.svg";
import Image from "next/image";

export const ReviewCard = ({ data }: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 m-2 border-2 border-primaryLight border-opacity-50">
      <div className="flex items-center mb-4 gap-2">
        {/* <span className="text-primaryDark mr-2" >{}</span> */}
        <Image src={GoogleIcon} alt="google-review" width={30} height={30} />
        <p className="text-dark text-sm font-bold">Google Review</p>
      </div>
      <div className="flex gap-1">{generateRating(data.rate)}</div>
      <div className="flex items-center mb-4"></div>
      <p className="text-gray-60 mb-4 h-30">{data.review}</p>
      <p className="text-primaryDark font-semibold">- {data.name}</p>
    </div>
  );
};

const generateRating = (rate: number) => {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) star.push(<FaStar className="text-yellow" />);
    else star.push(<FaStar />);
  }

  return star;
};
