export default function UserCard({ user }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text mb-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text mb-1">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Website:</strong> {user.website}
        </p>
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto btn btn-primary"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
