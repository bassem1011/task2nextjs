import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const getBooksFilePath = () =>
  path.join(process.cwd(), "src", "data", "books.json");

export async function PUT(request, { params }) {
  const id = Number(params.id);
  const updatedBook = await request.json();
  const filePath = getBooksFilePath();
  const data = await fs.readFile(filePath, "utf-8");
  let books = JSON.parse(data);

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  books[index] = { ...books[index], ...updatedBook };

  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return NextResponse.json(books[index]);
}

export async function DELETE(request, { params }) {
  const id = Number(params.id);
  const filePath = getBooksFilePath();
  const data = await fs.readFile(filePath, "utf-8");
  let books = JSON.parse(data);

  books = books.filter((b) => b.id !== id);

  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return NextResponse.json({}, { status: 204 });
}
