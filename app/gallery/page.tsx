import { PageHeader } from "@/components/PageTitle";
import { SectionContainer } from "@/components/SectionContainer";
import { Metadata } from "next";
import Image from "next/image";
import Image1 from "@/public/clinic-images/clinic.jpg";
import Image2 from "@/public/clinic-images/02.jpg";
import Image3 from "@/public/clinic-images/03.jpg";
import Image4 from "@/public/clinic-images/04.jpg";
import Image5 from "@/public/clinic-images/05.jpg";
import Image6 from "@/public/clinic-images/06.jpg";

const images = [
  {
    src: Image1,
    alt: "physiotherapeutic-clinic-inside-look.jpg",
  },
  {
    src: Image2,
    alt: "Image 2",
  },
  {
    src: Image3,
    alt: "Image 3",
  },
  {
    src: Image4,
    alt: "Image 4",
  },
  {
    src: Image5,
    alt: "Image 3",
  },
  {
    src: Image6,
    alt: "Image 5",
  },
  // Add more images as needed
];
export const metadata: Metadata = {
  title: "Gallery | The Physiotherapeutic Clinc",
  description:
    "Explore our gallery to see the state-of-the-art facilities, modern equipment, and compassionate care at The Physiotherapeutic Clinc in Gandhinagar. ",
};
const ImageGallery = () => {
  return (
    <>
      <PageHeader title="Image Gallery" />
      <main>
        <SectionContainer>
          <div className="text-center mb-12">
            <p className="text-primaryDark uppercase tracking-widest">
              HOW OUR CLINIC LOOK
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
              Clinic Photo Gallary
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  //   layout="responsive"
                  width={600}
                  height={400}
                  className="h-[300px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105 object-center"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
                  <p className="text-white text-lg font-bold">{image.alt}</p>
                </div> */}
              </div>
            ))}
          </div>
        </SectionContainer>
      </main>
    </>
  );
};

export default ImageGallery;
