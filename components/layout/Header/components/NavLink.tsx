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
    <Link href={`/#`}>
      <button
        key={route.path}
        onClick={() => setActualRoute(route.path)}
        className={`
          ${
            actualRoute === route.path
              ? "text-primary-foreground"
              : "hover:text-muted"
          } 
          relative rounded-full px-3 py-1.5 text-base font-medium tracking-wide text-foreground transition focus-visible:ring-ring
        `}
      >
        {actualRoute === route.path && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 bg-secondary mix-blend-difference"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        {route.label}
      </button>
    </Link>
  );
};
