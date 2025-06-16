"use client";
export default function ErrorComponent({ error, reset }) {
  return (
    <div>
      <p className="text-danger">Failed to load users.</p>
      <button className="btn btn-secondary" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
