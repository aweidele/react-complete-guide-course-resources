import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { max: 3 }], // if this query key is used elsewhere, React Query will use the same data if it's cached
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // the fetch function
    staleTime: 5000, // How long the data remains cached
    gcTime: 30000,
  });
  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    console.log(error);
    content = <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch events"} />;
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
