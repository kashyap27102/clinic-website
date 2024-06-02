import Image from "next/image";
import OwnerImg from "@/public/owner.jpg"

export const OwnerInfo = () => {
  return (
    <>
      <div className="text-center mb-12">
        <p className="text-primaryDark uppercase tracking-widest">
          MEET OUR
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-dark mt-2">
          Expert Physiotherapy Doctor
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-primaryDark text-white rounded-lg gap-4">
        <div className="col-span-1 lg:col-span-2 p-6 space-y-4">
          <div>
            <h3 className="text-4xl font-semibold">Dr. Pradhyuman Patel</h3>
            <h5 className="text-xl font-medium">
              (Consultant physiotherapist)
            </h5>
          </div>
          <p className="text-lg">
            Dr. Prahyuman Patel is a highly qualified and experienced
            physiotherapist in Gandhinagar, with more than 2 years of experience in
            the field. He is providing quality care to patients of all ages, ranging
            from children to elders. In addition to his clinical work, he is
            also the director of World of Rehab, a leading physiotherapy clinic
            in Gandhinagar that provides innovative and effective treatments to
            patients in need.
          </p>
          <p className="text-lg">
            Dr. Pradhyuman is known for his commitment, compassion, and friendly
            demeanor, which have earned him a reputation as a dedicated and
            caring physiotherapist. He is passionate about helping people of all
            ages and backgrounds, and he takes a patient-centered approach to
            his work, tailoring each treatment plan to meet the unique needs of
            his patients.
          </p>
        </div>
        <div className="col-span-1">
          <Image src={OwnerImg} alt="owner-info" className="rounded-e-md"/>
        </div>
      </div>
    </>
  );
};
