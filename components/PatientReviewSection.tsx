import { reviews } from "@/data/reviews";
import { ReviewCard } from "./ReviewCard";

export const PatientReviewSection = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {reviews.map((r) => {
          return <ReviewCard data={r} key={r.id} />;
        })}
      </div>
    </section>
  );
};
