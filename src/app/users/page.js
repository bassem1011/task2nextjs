import UserCard from "../../components/UserCard";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  const users = await res.json();

  return (
    <div className="row g-4">
      {users.map((u) => (
        <div key={u.id} className="col-12 col-md-6 col-lg-4">
          <UserCard user={u} />
        </div>
      ))}
    </div>
  );
}
