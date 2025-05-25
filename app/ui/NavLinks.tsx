"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <li className="inline-flex">
      {!pathName ? (
        <span className="inline-flex items-center border-b-2 pt-px text-sm font-medium text-neutral-900">
          {children}
        </span>
      ) : (
        <Link
          href={path}
          className={clsx(
            isActive
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-500",
            "inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700"
          )}
        >
          {children}
        </Link>
      )}
    </li>
  );
}
