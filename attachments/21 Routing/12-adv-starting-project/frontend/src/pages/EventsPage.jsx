import { Link } from "react-router-dom";
const EVENTS = [
  { id: "event-1", title: "Etiam sit amet orci eget eros faucibus tincidunt." },

  { id: "event-2", title: "In ac felis quis tortor malesuada pretium." },

  { id: "event-3", title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia." },

  { id: "event-4", title: "Nulla porta dolor." },

  { id: "event-5", title: "Proin faucibus arcu quis ante." },
];

export function EventsPage() {
  return (
    <>
      <div>EventsPage</div>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
