export const LocationSection = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">
          OUR LOCATION
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-2">
          Find Us on the Map
        </h2>
      </div>
      <div className="relative h-96">
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.670956302049!2d72.63283831049816!3d23.182206478974923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf9f68f9a75%3A0x7ad1fbc1572ef282!2sThe%20Physio%20Therapeutic%20Clinic!5e0!3m2!1sen!2sin!4v1715432337967!5m2!1sen!2sin"
        //   allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
