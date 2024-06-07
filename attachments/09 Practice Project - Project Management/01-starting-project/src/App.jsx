import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

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

  function handleSaveAddProject(title, description, date) {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      return {
        ...prevState,
        selectedProjectId: projectID,
        projects: [
          ...prevState.projects,
          {
            title: title,
            description: description,
            date: date,
            id: projectID,
          },
        ],
      };
    });
  }

  function handleSelectProject(projectID) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectID,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  const { projects } = projectsState;

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveAddProject={handleSaveAddProject} onCancelAddProject={handleCancelAddProject} />;
  } else {
    const currentProject = projects.find((project) => project.id === projectsState.selectedProjectId);
    content = <SelectedProject project={currentProject} onDelete={handleDeleteProject} />;
  }

  return (
    <main className="h-screen flex gap-6 pt-8">
      <Sidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProject={projectsState.selectedProjectId} projects={projects} />
      <div className="w-7/12">{content}</div>
    </main>
  );
}

export default App;
