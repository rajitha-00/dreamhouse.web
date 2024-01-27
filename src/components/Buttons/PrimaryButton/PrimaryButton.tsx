import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type PrimaryButtonProps = {
  name: string;
  hasArrow?: boolean;
  url: string;
};

export const PrimaryButton = ({
  name,
  hasArrow,
  url,
}: PrimaryButtonProps): JSX.Element => {
  return (
    <Link href={url}>
      <button className="inline-flex items-center mt-6 flex-none rounded-md px-3 py-2 text-lg font-poppins bg-gradient-to-r from-[#dfa579] via-[#c79081]  to-[#dfa594] hover:bg-gradient-to-br">
        {name}
        {hasArrow && (
          <ArrowRightIcon
            className="ml-1.5 -mr-0.5 h-5 w-5 lg:font-[500] text-md font-poppins"
            aria-hidden="true"
          />
        )}
      </button>
    </Link>
  );
};
