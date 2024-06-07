import { forwardRef } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonLabel = "Close" }, ref) {
  return (
    <dialog ref={ref} className="p-8 backdrop:bg-slate-900/80">
      {children}
      <form method="dialog" className="text-right my-4">
        <Button>{buttonLabel}</Button>
      </form>
    </dialog>
  );
});
export default Modal;
