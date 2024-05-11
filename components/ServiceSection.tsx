const services = [
  {
    id: "1",
    img: "",
    name: "",
  },
];

export const ServiceSection = () => {
  return (
    <section className="">
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">HOW WE DO</p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
          Our Services By Experts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://demo.htmlcodex.com/3263/physical-therapy-website-template/img/service-4.jpg"
            alt="Physiotherapy"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-primaryDark">
              Physiotherapy
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet risus nec ante posuere, sit amet condimentum nunc feugiat.
            </p>
          </div>
        </div>
        {/* Service Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://demo.htmlcodex.com/3263/physical-therapy-website-template/img/service-1.jpg"
            alt="Physiotherapy"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-primaryDark">
              Sports Injury Rehabilitation
            </h3>
            <p className="text-gray-600 mt-2">
              Vivamus suscipit varius mi sed finibus. Curabitur nec dui sit amet
              arcu condimentum tempus.
            </p>
          </div>
        </div>
        {/* Service Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://demo.htmlcodex.com/3263/physical-therapy-website-template/img/service-6.jpg"
            alt="Physiotherapy"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-primaryDark">
              Pain Management
            </h3>
            <p className="text-gray-600 mt-2">
              Nulla ac velit vel augue suscipit dapibus. Sed non fermentum elit.
              Integer nec purus id velit lacinia vehicula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
