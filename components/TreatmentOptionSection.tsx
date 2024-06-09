import Image from "next/image";

export const TreatmentOptionsSection = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">
          TREATMENT OPTIONS
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
          Choose Your Treatment
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clinic Treatment */}
        <div className="bg-primary text-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Clinic Treatment
          </h3>
          <p className="text-gray-600">
            Receive personalized treatment at our clinic from our experienced
            physiotherapists.
          </p>
        </div>
        {/* Home Visit */}
        <div className="bg-primary text-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Home Visit
          </h3>
          <p className="text-gray-600 ">
            Get treatment in the comfort of your own home. Our therapists will
            come to you.
          </p>
        </div>
        {/* Virtual Treatment */}
        <div className="bg-primary text-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Virtual Treatment
          </h3>
          <p className="text-gray-600">
            Access physiotherapy services remotely from anywhere via virtual
            sessions.
          </p>
        </div>
      </div>
    </section>
  );
};
