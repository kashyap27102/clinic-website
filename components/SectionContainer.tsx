export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-slate-300 p-6 md:p-16  ${className} `}>
      <div className="md:w-4/5 m-auto">{children}</div>
    </div>
  );
};
