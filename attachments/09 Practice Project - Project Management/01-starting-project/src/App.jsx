import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";

function App() {
  const [mode, setMode] = useState("no-project");

  function changeMode(mode) {
    setMode((oldMode) => mode);
  }

  return (
    <main className="h-screen flex gap-6 pt-8">
      <Sidebar onChangeMode={changeMode} />
      <div className="w-7/12">
        {mode === "no-project" && <NoProject onChangeMode={changeMode} />}
        {mode === "new-project" && <NewProject onChangeMode={changeMode} />}
      </div>
    </main>
  );
}

export default App;
