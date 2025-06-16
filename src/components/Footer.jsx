"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-light py-3 mt-auto">
      <div className="container text-center">
        <small>© {year || "…"} MyNextApp</small>
      </div>
    </footer>
  );
}
