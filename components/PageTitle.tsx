import React from "react";
import bgImage from "@/public/clinic-image-01.jpg";
export const PageHeader = ({
  title,
}: {
  title: string;
}) => {
  return (
    <header className=" h-48 bg-primary">
      <div className="w-4/5 mx-auto flex h-full items-center justify-center ">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold z-10">{title}</h1>
      </div>
    </header>
  );
};
