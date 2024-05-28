import s1 from '@/public/service-images/s1.jpg';
import s2 from '@/public/service-images/s2.jpg';
import s3 from '@/public/service-images/s3.jpg';
import s4 from '@/public/service-images/s4.jpg';
import s5 from '@/public/service-images/s5.jpg';
import s10 from '@/public/service-images/s10.jpg';
import s7 from '@/public/service-images/s7.jpg';
import s8 from '@/public/service-images/s8.jpg';
import s11 from '@/public/service-images/s11.jpg';
import s12 from '@/public/service-images/s12.jpg';
import s13 from '@/public/service-images/s13.jpg';
import s14 from '@/public/service-images/s14.jpg';
import s15 from '@/public/service-images/s15.jpg';

export interface Service {
  id: string;
  name: string;
  description: string;
  srcLink: string;
  image: {
    src: string;
    alt: string;
  };
}

export const services = [
  {
    id: "SD-000001",
    name: "Back Pain",
    description:
      "Exercises and techniques are used in back pain physiotherapy to reduce discomfort, increase range of motion, and strengthen the spine.",
    srcLink: "",
    image: {
      src: s1,
      alt: "Back-Pain-Physiotherapy",
    },
  },
  {
    id: "SD-000002",
    name: "Neck Pain",
    description:
      "Physiotherapy for neck pain provides customized exercises and methods to reduce pain, increase range of motion, and improve neck health in general.",
    srcLink: "",
    image: {
      src: s2,
      alt: "Neck-Pain-Physiotherapy",
    },
  },
  {
    id: "SD-000003",
    name: "Knee Pain",
    description:
      "Knee pain physiotherapy provides focused exercises and methods to reduce pain, build muscle, and improve range of motion.",
    srcLink: "",
    image: { src: s3, alt: "Knee Pain Physiotherapy" },
  },
  {
    id: "SD-000014",
    name: "Electrotherapy",
    description:
      "Electric currents are used in electrotherapy to stimulate muscles or nerves to relieve pain, promote tissue repair, and aid in rehabilitation for a variety of ailments.",
    srcLink: "",
    image: { src: s14, alt: "Electrotherapy" },
  },
  {
    id: "SD-000004",
    name: "Cupping Therapy",
    description:
      "Using cups to create suction on the skin is the ancient practice of cupping therapy. It is thought to facilitate blood flow and aid in relaxation.",
    srcLink: "",
    image: { src: s15, alt: "Cupping Therapy" },
  },
  {
    id: "SD-000005",
    name: "Needling Therapy",
    description:
      "As a type of acupuncture, Needling Therapy uses tiny needles to stimulate specific body spots in an effort to reduce pain and accelerate recovery.",
    srcLink: "",
    image: { src: s5, alt: "Needling Therapy" },
  },
  {
    id: "SD-000007",
    name: "Interferential Therapy",
    description:
      "Envision a scenario where suffering does not restrict one's abilities - Interferential therapy is a medical procedure that uses electrical currents that cross to relieve pain and promote tissue repair.",
    srcLink: "",
    image: { src: s7, alt: "Interferential Therapy" },
  },
  {
    id: "SD-000008",
    name: "Thermotherapy",
    description:
      "Thermotherapy is a therapeutic technique that involves delivering heat to the body in order to promote relaxation, ease muscle tension, and increase blood flow.",
    srcLink: "",
    image: { src: s8, alt: "Thermotherapy" },
  },
  {
    id: "SD-000010",
    name: "Kinesio Taping",
    description:
      "Using elastic tape to support muscles, joints, and movement, Kinesio taping therapy is a non-invasive method that encourages the body's natural healing processes.",
    srcLink: "",
    image: { src: s10, alt: "Kinesio Taping Therapy" },
  },
  {
    id: "SD-000011",
    name: "Myofascial Release",
    description:
      "By focusing on the fascia—the connective tissue that surrounds muscles—Myofascial Release is a manual therapy that reduces discomfort and tension in the muscles.",
    srcLink: "",
    image: { src: s11, alt: "Myofascial Release Therapy" },
  },
  {
    id: "SD-000012",
    name: "Manual Therapy",
    description:
      "By using expert skills, manual therapy is a hands-on approach that seeks to reduce pain, increase mobility, and improve general physical function.",
    srcLink: "",
    image: { src: s12, alt: "Manual Therapy" },
  },
  {
    id: "SD-000013",
    name: "TENS Therapy",
    description:
      "Transcutaneous Electrical Nerve Stimulation, or TENS therapy, is a pain relief and muscle relaxation technique that uses low-voltage electrical currents applied to skin electrodes.",
    srcLink: "",
    image: { src: s13, alt: "TENS Therapy" },
  },
  
  {
    id: "SD-000015",
    name: "Ultrasound Therapy",
    description:
      "High-frequency sound waves are used in ultrasound therapy to treat deep tissue, which aids in healing and lessens discomfort.",
    srcLink: "",
    image: { src:s15, alt: "Ultrasound Therapy" },
  },
];

