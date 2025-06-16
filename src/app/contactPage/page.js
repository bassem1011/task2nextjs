"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-4 text-center text-success fw-bold">Contact Us</h1>

          {sent ? (
            <div className="alert alert-success text-center rounded-4 shadow-sm">
              ✅ Thanks for reaching out! We’ll get back to you soon.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="card border-0 shadow-lg p-4 rounded-4"
            >
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg rounded-3"
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control form-control-lg rounded-3"
                  rows="4"
                  required
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg w-100 rounded-pill"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
