"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false); // ✅ new flag

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min").catch((err) =>
      console.error("Bootstrap JS load failed:", err)
    );
  }, []);

  useEffect(() => {
    const status = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(status);
    setIsReady(true); // ✅ signal hydration complete
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/page";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light mb-4">
      <div className="container">
        <Link href="/homePage" className="navbar-brand text-success">
          MyNextApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/homePage" className="nav-link text-success">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutPage" className="nav-link text-success">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactPage" className="nav-link text-success">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/users" className="nav-link text-success">
                Users
              </Link>
            </li>
          </ul>

          {/* ✅ Only render after hydration */}
          {isReady && loggedIn && (
            <button onClick={handleLogout} className="btn text-success">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
