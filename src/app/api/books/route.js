import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// دالة لتحميل البيانات من JSON
const getBooksFilePath = () =>
  path.join(process.cwd(), "src", "data", "books.json");

export async function GET() {
  const data = await fs.readFile(getBooksFilePath(), "utf-8");
  const books = JSON.parse(data);
  return NextResponse.json(books);
}

export async function POST(request) {
  const newBook = await request.json();
  const filePath = getBooksFilePath();
  const data = await fs.readFile(filePath, "utf-8");
  const books = JSON.parse(data);

  newBook.id = Date.now();
  books.push(newBook);

  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return NextResponse.json(newBook, { status: 201 });
}
