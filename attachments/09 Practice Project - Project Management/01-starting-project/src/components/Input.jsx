import { useRef, forwardRef } from "react";

const Input = forwardRef(function Input({ label, multiline = false, ...props }, ref) {
  const classes = "block w-full bg-slate-300 p-1 border-b-slate-400 border-b-2";
  return (
    <div className="mb-4">
      <label className="block uppercase">{label}</label>
      {!multiline ? <input className={classes} {...props} ref={ref} /> : <textarea className={classes} {...props} ref={ref}></textarea>}
    </div>
  );
});

export default Input;
