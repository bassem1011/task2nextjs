"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", id: null });

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    const url = form.id ? `/api/books/${form.id}` : "/api/books";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: form.title, author: form.author }),
    });

    if (res.ok) {
      setForm({ title: "", author: "", id: null });
      fetchBooks();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`/api/books/${id}`, { method: "DELETE" });
    fetchBooks();
  };

  const handleEdit = (book) => {
    setForm(book);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 display-4 text-success fw-bold">
         Book Manager
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card p-4 mb-5 border-0 shadow-lg rounded-4">
        <h4 className="mb-4 text-secondary">{form.id ? "Edit Book" : "Add New Book"}</h4>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control form-control-lg"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter book title"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control form-control-lg"
            required
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            placeholder="Enter author name"
          />
        </div>

        <button type="submit" className="btn btn-success btn-lg w-100 rounded">
          {form.id ? "Update Book" : "Add Book"}
        </button>
      </form>

      {/* Books List */}
      <div className="row">
        {books.map((book) => (
          <div className="col-md-6 col-lg-4 mb-4" key={book.id}>
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{book.title}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{book.author}</h6>
                <div className="mt-auto d-flex justify-content-between">
                  <button
                    className="btn btn-outline-success btn-sm rounded px-3"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm rounded px-3"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {books.length === 0 && (
          <div className="col-12 text-center mt-4">
            <p className="text-muted fs-5">No books available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
