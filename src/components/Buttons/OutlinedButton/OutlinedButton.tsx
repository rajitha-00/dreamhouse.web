import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type OutlinedButtonProps = {
  name: string | undefined;
  hasArrow?: boolean;
  url: string;
};

export const OutlinedButton = ({
  name,
  hasArrow,
  url,
}: OutlinedButtonProps): JSX.Element => {
  return (
    <Link href={url}>
      <button
        type="submit"
        className="inline-flex items-center mt-6 flex-none border-white border-[1px] rounded-md px-3.5 py-2.5 text-sm font-poppins bg-none text-white shadow-sm hover:bg-[#d8d9e256] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {name}

        {hasArrow && (
          <ArrowRightIcon
            className="ml-1.5 -mr-0.5 h-5 w-5 text-white font-600"
            aria-hidden="true"
          />
        )}
      </button>
    </Link>
  );
};
