import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p>Loading event</p>}>
        <Await resolve={event}>
          {(loadedEvent) => {
            console.log("loadedEvent", loadedEvent);
            return <EventItem event={loadedEvent} />;
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading events</p>}>
        <Await resolve={events}>
          {(loadedEvents) => {
            console.log("loadedEvents", loadedEvents);
            return <EventsList events={loadedEvents.events} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch select event details" }), { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

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

export async function eventDetalLoader({ request, params }) {
  const id = params.eventId;
  return {
    event: loadEvent(id),
    events: loadEvents(),
  };
}

export async function eventDelete({ params, request }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event" }), { status: 500 });
  }
  return redirect("/events");
}
