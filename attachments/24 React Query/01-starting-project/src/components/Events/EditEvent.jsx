import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventID: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  function handleSubmit(formData) {}

  function handleClose() {
    navigate("../");
  }

  // console.log(data);

  return (
    <Modal onClose={handleClose}>
      {isError && (
        <>
          <ErrorBlock title="Failed to load event" message={error.info?.message || "Failed to load event"} />
          <div className="form-actions">
            <Link to="../" className="button">
              Okay
            </Link>
          </div>
        </>
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
    </Modal>
  );
}
