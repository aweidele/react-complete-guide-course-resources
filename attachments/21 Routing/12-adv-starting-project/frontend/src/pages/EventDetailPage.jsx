import { useParams, Link } from "react-router-dom";

export function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>{params.eventId}</h1>
      <p>EventDetailPage</p>
      <p>
        <Link to="edit">Edit me</Link>
      </p>
    </div>
  );
}
