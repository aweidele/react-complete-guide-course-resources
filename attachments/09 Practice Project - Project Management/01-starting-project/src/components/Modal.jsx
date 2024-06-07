import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  return (
    <dialog ref={ref} className="p-8">
      {children}
    </dialog>
  );
});
export default Modal;
