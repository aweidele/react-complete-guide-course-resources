import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";

function App() {
  const [mode, setMode] = useState("no-project");
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function changeMode(mode) {
    setMode((oldMode) => mode);
  }

  return (
    <main className="h-screen flex gap-6 pt-8">
      <Sidebar onChangeMode={changeMode} onStartAddProject={handleStartAddProject} />
      <div className="w-7/12">
        {projectsState.selectedProjectId === undefined && <NoProject onStartAddProject={handleStartAddProject} />}
        {projectsState.selectedProjectId === null && <NewProject onSaveAddProject={handleSaveAddProject} onCancelAddProject={handleCancelAddProject} />}
      </div>
    </main>
  );
}

export default App;
