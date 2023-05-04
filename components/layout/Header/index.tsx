"use client";

import { useState } from "react";
import {usePathname} from 'next/navigation'

import { NavLink } from "./components/NavLink";

const routes = [
  { path: "/", label: "Página principal" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contato" },
];

export const Header = () => {
  const pathname = usePathname()
  const routeState = useState(pathname);

  return (
    <header className="flex w-full justify-center py-4">
      <nav className="mx-auto flex w-max gap-x-5">
        {routes.map((route) => (
          <NavLink
            key={`nav-link-route-${route.path}`}
            route={route}
            routeState={routeState}
          />
        ))}
      </nav>
    </header>
  );
};
