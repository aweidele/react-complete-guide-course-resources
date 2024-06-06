export default function Input({ label, multiline = false, ...props }) {
  const classes = "block w-full bg-slate-300 p-1 border-b-slate-400 border-b-2";
  return (
    <div className="mb-4">
      <label className="block uppercase">{label}</label>
      {!multiline ? <input className={classes} {...props} /> : <textarea className={classes} {...props}></textarea>}
    </div>
  );
}
