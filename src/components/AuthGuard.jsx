// src/components/AuthGuard.jsx
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    if (!loggedIn && pathname !== "/") {
      router.replace("/");
    } else if (loggedIn && pathname === "/") {
      router.replace("/homePage");
    }
  }, [pathname, router]);

  return children;
}
