"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <Link
      href={route.path}
      onClick={() => setActualRoute(route.path)}
      className={`
          ${
            actualRoute === route.path ? "text-primary" : "hover:text-white/30"
          } 
          relative z-10 px-3 py-1.5 text-base font-medium tracking-wide text-foreground transition
        `}
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
