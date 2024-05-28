import { PageHeader } from "@/components/PageTitle";
import { SectionContainer } from "@/components/SectionContainer";
import { Metadata } from "next";
import Image from "next/image";

const images = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOyJCDhA17IUvegpUfiBqF1--F7dGMGESo21v9O=s1360-w1360-h1020",
    alt: "Image 1",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNDoJ8fZGZ2zD88DuBGo7AQkGQLW9Os7s6AvVYk=s1360-w1360-h1020",
    alt: "Image 2",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNnpG-5ICIFLtVDC8TjC3Wld7_5Y0j85CZ7cm9L=s1360-w1360-h1020",
    alt: "Image 3",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOMqW46MJG63jtR5nbq0RrqPuA2F1UF92-sKi3n=s1360-w1360-h1020",
    alt: "Image 4",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNnpG-5ICIFLtVDC8TjC3Wld7_5Y0j85CZ7cm9L=s1360-w1360-h1020",
    alt: "Image 3",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNnpG-5ICIFLtVDC8TjC3Wld7_5Y0j85CZ7cm9L=s1360-w1360-h1020",
    alt: "Image 5",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNnpG-5ICIFLtVDC8TjC3Wld7_5Y0j85CZ7cm9L=s1360-w1360-h1020",
    alt: "Image 6",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  //   layout="responsive"
                  width={400}
                  height={500}
                  className="h-[300px] object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105 object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
                  <p className="text-white text-lg font-bold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </main>
    </>
  );
};

export default ImageGallery;
