import { IoMdEye } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";

export const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="col-span-1 text-justify space-y-3 md:p-6">
        <TbTargetArrow className="text-8xl text-primaryDark" />
        <h4 className="text-dark text-2xl font-semibold">Mission</h4>
        <p>
          Our Mission is to deliver exceptional physiotherapy care through
          evidence-based practices, compassionate service, and a
          patient-centered approach. We strive to improve the quality of life
          for our patients by helping them achieve their physical health goals
          and regain their independence.
        </p>
      </div>
      <div className=" col-span-1 text-justify space-y-3 md:p-6">
        <IoMdEye className="text-8xl text-primaryDark" />
        <h4 className="text-dark text-2xl font-semibold">Vision</h4>
        <p>
          Our Vision is to be the leading physiotherapy clinic in Gandhinagar
          and Ahmedabad, known for our commitment to excellence, innovation, and
          holistic patient care. We aim to set new standards in the field of
          physiotherapy by continuously advancing our techniques and fostering a
          community of health and wellness.
        </p>
      </div>
    </div>
  );
};
