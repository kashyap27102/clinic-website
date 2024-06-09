import { BookingButton } from "./BookingButton";
import clinicImg from "@/public/clinic-images/clinic.jpg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primaryDark to-primaryLight sm:p-0 lg:p-0  grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      <div className="flex flex-col justify-center p-10 h-full">
        <h1 className="text-white text-4xl lg:text-6xl font-semibold leading-tight mb-4 ">
          Your Health, Our Priority
        </h1>
        <p className="text-white text-lg lg:text-xl leading-relaxed mb-8">
          Providing comprehensive and compassionate care. Our experienced team
          ensures you receive top-quality medical services in a welcoming
          environment
        </p>
        <BookingButton />
      </div>

      <div className="hidden lg:flex items-center justify-center h-full">
        {/* Ensure that the width and height of the Image component match the container */}
        <div className="h-full w-full">
          <Image
            src={clinicImg}
            height={600}
            alt="clinic-photo"
            objectFit='cover'
            className="h-full object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};
