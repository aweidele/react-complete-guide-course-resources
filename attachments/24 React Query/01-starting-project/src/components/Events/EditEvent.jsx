import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventID: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", { eventID: id }] });

      const previousEvent = queryClient.getQueryData(["events", { eventID: id }]);
      queryClient.setQueryData(["events", { eventID: id }], newEvent);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", { eventID: id }], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", { eventID: id }]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

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
