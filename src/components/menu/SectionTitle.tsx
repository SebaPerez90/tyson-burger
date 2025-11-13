const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <h2 className="relative inline-block text-xl sm:text-2xl font-bold mb-10 text-white after:absolute after:inset-x-0 after:bottom-0 after:h-6 after:bg-red-600/80 after:-z-10 after:rounded after:skew-x-[-10deg] after:blur-[35px]">
      {title}{" "}
      <span className="text-sm text-neutral-100 font-normal">{subtitle}</span>
    </h2>
  );
};

export default SectionTitle;
