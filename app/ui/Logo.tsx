import Link from "next/link";

const companyName = "SHOOPy";

export const Logo = () => {
  return (
    <div className="flex items-center font-bold">
      <Link aria-label="homepage" href="/">
        {companyName}
      </Link>
    </div>
  );
};
