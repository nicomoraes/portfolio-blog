"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Route = {
  path: string;
  label: string;
};

interface NavLinkProps {
  route: Route;
  routeState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const NavLink: React.FC<NavLinkProps> = ({
  routeState: [actualRoute, setActualRoute],
  route,
}) => {
  const samePath = actualRoute === route.path;
  return (
    <Link
      href={route.path}
      onClick={() => setActualRoute(route.path)}
      className={twMerge(
        `relative z-10 px-3 py-1.5 text-base font-medium tracking-wide text-foreground transition`,
        samePath ? "text-primary" : "hover:text-white/30"
      )}
    >
      {actualRoute === route.path && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 -z-10 rounded-md bg-foreground"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {route.label}
    </Link>
  );
};
