const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <header className="flex flex-col items-center justify-center gap-1 pb-5 ">
      <h2 className="text-md sm:text-lg font-bold text-white">{title} </h2>
      <span className="text-neutral-200 text-[8px] sm:text-xs font-normal">
        {subtitle}
      </span>
    </header>
  );
};

export default SectionTitle;
