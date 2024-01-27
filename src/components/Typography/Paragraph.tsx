type ParagraphProps = {
  paragraph: string;
  start?: boolean;
};

export const Paragraph = ({
  paragraph,
  start,
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={
        start
          ? "bodyText font-poppins text-sm md:text-lg  mx-auto max-w-7xl text-textColorLight md:text-justify "
          : "bodyText font-poppins text-sm md:text-lg  mx-auto max-w-7xl text-textColorLight md:text-justify "
      }
    >
      {paragraph}
    </p>
  );
};
