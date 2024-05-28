"use client";
import Slider from "react-slick";
import { FaStar, FaGoogle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export const PatientReviewSection = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

  const ReviewCard = () => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 m-2 border-2 border-primaryLight border-opacity-50">
        <div className="flex items-center mb-4">
          <FaGoogle className="text-primaryDark mr-2" />
          <p className="text-dark text-sm">Google Review</p>
        </div>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow mr-1" />
          <FaStar className="text-yellow mr-1" />
          <FaStar className="text-yellow mr-1" />
          <FaStar className="text-yellow mr-1" />
          <FaStar className="text-yellow" />
        </div>
        <p className="text-gray-60 mb-4">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
        </p>
        <p className="text-primaryDark font-semibold">- John Doe</p>
      </div>
    );
  };

  return (
    <section className="">
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">
          PATIENT REVIEWS
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
          What Our Patients Say
        </h2>
      </div>
      <Slider {...settings} className="flex gap-2">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </Slider>
    </section>
  );
};
