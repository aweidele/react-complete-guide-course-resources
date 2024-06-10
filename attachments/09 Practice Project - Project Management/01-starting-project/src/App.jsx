import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const defaultProjectId = Math.random();
  const [mode, setMode] = useState("no-project");
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        title: "This is a test Project",
        description: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Ut tincidunt tincidunt erat.",
        date: "06/10/2024",
        id: defaultProjectId,
      },
    ],
    tasks: [
      {
        name: "This is a sample task",
        project: defaultProjectId,
        id: Math.random(),
      },
      {
        name: "This is task #2",
        project: Math.random(),
        id: Math.random(),
      },
      {
        name: "This is task #3",
        project: defaultProjectId,
        id: Math.random(),
      },
    ],
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

  function handleAddTask({ name }) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [
          ...prevState.tasks,
          {
            name: name,
            project: prevState.selectedProjectId,
          },
        ],
      };
    });
  }

  const { projects, tasks } = projectsState;

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveAddProject={handleSaveAddProject} onCancelAddProject={handleCancelAddProject} />;
  } else {
    const currentProject = projects.find((project) => project.id === projectsState.selectedProjectId);
    content = <SelectedProject project={currentProject} tasks={tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} />;
  }

  return (
    <main className="h-screen flex gap-6 pt-8">
      <Sidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProject={projectsState.selectedProjectId} projects={projects} />
      <div className="w-7/12">{content}</div>
    </main>
  );
}

export default App;
