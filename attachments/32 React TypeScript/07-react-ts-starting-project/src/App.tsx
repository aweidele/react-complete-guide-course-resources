import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["item 1", "item 2"]} />
    </div>
  );
}

export default App;
