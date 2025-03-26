import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p>Potato?</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          console.log("loadedEvents", loadedEvents);
          // return <p>HellO!</p>;
          return <EventsList events={loadedEvents.events} />;
        }}
      </Await>
    </Suspense>
  );

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), { status: 500 });
    // throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return { events: loadEvents() };
}
