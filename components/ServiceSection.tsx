import { services } from "@/data/service";
import Image from "next/image";

export const ServiceSection = () => {
  return (
    <section className="">
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">WHAT WE DO</p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
          Our Services By Experts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                objectFit="cover"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-primaryDark">
                  {service.name}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
