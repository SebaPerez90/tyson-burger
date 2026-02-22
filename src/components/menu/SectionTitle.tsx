const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <h2 className="border-b border-b-white /60 pb-2   text-xl sm:text-2xl font-bold mb-16 text-white">
      {title}{" "}
      <span className="text-sm text-neutral-100 font-normal">{subtitle}</span>
    </h2>
  );
};

export default SectionTitle;
