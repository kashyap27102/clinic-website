import Image from "next/image";
import clinicImg from "@/public/clinic-img.jpg";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[600px] p-6 md:p-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-4xl lg:text-6xl font-semibold leading-tight mb-4">
          Best Solution For Painfull Life
        </h1>
        <p className="text-white text-lg lg:text-xl leading-relaxed mb-8">
          Providing compassionate care and personalized treatment plans for your
          well-being.
        </p>
        <button className="bg-white text-primaryDark font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 w-fit">
          Book an Appointment
        </button>
      </div>    
      
      <div className="hidden lg:flex items-center justify-center h-full">
        {/* Ensure that the width and height of the Image component match the container */}
        <div className="h-[400px] w-[600px] bg-light rounded-md shadow-lg">
            {/* <Image src={clinicImg} alt="" className="object-contain" height={800} width={600}/> */}
        </div>
      </div>
    </section>
  );
};
