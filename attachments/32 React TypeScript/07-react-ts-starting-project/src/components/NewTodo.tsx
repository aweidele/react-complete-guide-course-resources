export const NewTodo = () => {
  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
