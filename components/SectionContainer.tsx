export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`bg-slate-300 p-6 md:p-16  ${className} `}>
      <div className="sm:w-5/6 m-auto">{children}</div>
    </section>
  );
};
