"use client";

import Link from "next/link";

interface NavLinkProps {
  label: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, path }) => {
  return (
    <Link
      href={path}
      className="text-base text-foreground hover:text-foreground/50"
    >
      {label}
    </Link>
  );
};

export default NavLink;
