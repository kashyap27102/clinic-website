"use client";
import { useRouter } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";

export const BookingButton = () => {
  const router = useRouter();
  const handleClick = () => {
    const link = `https://wa.me/${9727114960}?text=${encodeURIComponent(
      'Hello'
    )}`;
    router.push(link);
  };
  return (
    <button
      className="bg-white text-primaryDark font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 w-fit flex items-center gap-2"
      onClick={handleClick}
    >
      <FaCalendarAlt />
      <span>Book Appointment Today</span>
    </button>
  );
};
