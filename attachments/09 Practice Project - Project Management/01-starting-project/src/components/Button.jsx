export default function Button({ children, action, secondary }) {
  const buttonclass = `${secondary ? "hover:text-red-700" : "bg-slate-700 text-white hover:bg-slate-500"} py-2 px-4 rounded`;
  return (
    <button className={buttonclass} onClick={action}>
      {children}
    </button>
  );
}
