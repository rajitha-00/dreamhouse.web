type PageTitleProps = {
  title: string;
  start?: boolean;
};

export const PageTitle = ({ title, start }: PageTitleProps): JSX.Element => {
  return (
    <h2
      className={
        start
          ? "sectionTitle  text-2xl md:text-4xl lg:text-5xl font-poppins font-[500] md:text-start text-primaryColor"
          : "sectionTitle  text-2xl md:text-4xl lg:text-5xl font-poppins font-[500] md:text-center text-primaryColor"
      }
    >
      {title}
    </h2>
  );
};
