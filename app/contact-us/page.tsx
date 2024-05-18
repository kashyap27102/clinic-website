import { ContactForm } from "@/components/ContactForm";
import { SectionContainer } from "@/components/SectionContainer";
import { Metadata } from "next";
import React from "react";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Physiotherapeutic Clinic, the leading physiotherapy center in Gandhinagar. Contact us today to schedule an appointment or learn more about our personalized physiotherapy services and expert care. Start your journey to optimal health and wellness!",
};

function ContactUsPage() {
  return (
    <div>
      <SectionContainer>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 lg:p-4">
            <h1 className="text-4xl text-primary font-semibold mb-4">
              Connect With Us
            </h1>
            <p className="mb-4">
              Get in touch with The Physiotherapeutic Clinic. Contact us today
              to schedule an appointment or learn more about our personalized
              physiotherapy services and expert care.
            </p>
            <div className=" font-medium mb-8">
              <ul>
                <li className="flex items-center gap-4 mb-2">
                  <IoCall className="h-5 w-5 text-primary" />
                  <span>+91 9727162550</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <FaWhatsapp className="h-5 w-5 text-primary" />
                  <span>+91 9727162550</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <MdEmail className="h-5 w-5 text-primary" />
                  <span>thephysiotherapeutic@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 mb-2">
                  <FaLocationDot className="self-start mt-1 h-5 w-5 text-primary" />
                  <span>203, Keshav Aaradhyam, Kudasan Gandhinagar</span>
                </li>
              </ul>
            </div>
            <div className="h-72 relative">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.670956302049!2d72.63283831049816!3d23.182206478974923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf9f68f9a75%3A0x7ad1fbc1572ef282!2sThe%20Physio%20Therapeutic%20Clinic!5e0!3m2!1sen!2sin!4v1715432337967!5m2!1sen!2sin"
                //   allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default ContactUsPage;
