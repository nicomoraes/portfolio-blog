"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { NavLink } from "./components/NavLink";

export const routes = [
  { path: "/", label: "Página principal" },
  { path: "/blog", label: "Blog" },
];

export const Header = () => {
  const pathname = usePathname();
  const routeState = useState(pathname);

  useEffect(() => {
    const [_, setRouteState] = routeState;
    setRouteState("/" + pathname.split("/")[1]);
  }, [pathname, routeState]);

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
