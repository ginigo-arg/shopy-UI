"use client";
import { useContext } from "react";
import { NavLinks } from "./NavLinks";
import { routes, unauthenticatedRoutes } from "../common/constants/routes";
import { AuthContext } from "../auth/auth-context";
import logout from "../auth/logout";

export const Nav = () => {
  const isAuthenticated = useContext(AuthContext);
  console.log("isAuthenticated:", isAuthenticated);
  const pages = isAuthenticated ? routes : unauthenticatedRoutes;
  return (
    <nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
      <ul className="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
        {pages.map(({ path, title }) => (
          <NavLinks path={path} key={title}>
            {title}
          </NavLinks>
        ))}
      </ul>

      {isAuthenticated && (
        <span
          className="hidden md:inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-700"
          onClick={async () => {
            await logout();
          }}
        >
          Log Out
        </span>
      )}
    </nav>
  );
};
