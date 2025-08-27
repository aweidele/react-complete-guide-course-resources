import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

import Header from "../Header.jsx";

import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import { useState } from "react";

export default function EventDetails() {
  const [deleteStatus, setDeleteStatus] = useState();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventID: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  const handleDelete = () => {
    mutate({ id });
  };

  console.log("DATA", data);
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && <LoadingIndicator />}

      {isError && <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch event"} />}

      {data && (
        <article id="event-details">
          <header>
            <h1>{data?.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
            {deleteStatus === "error" && <p>Error deleting</p>}
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data?.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data?.date} @ {data?.time}
                </time>
              </div>
              <p id="event-details-description">{data?.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
