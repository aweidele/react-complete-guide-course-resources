import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
function App() {
  return (
    <main className="h-screen flex gap-6 pt-8">
      <Sidebar />
      <div className="w-7/12">
        <NewProject />
      </div>
    </main>
  );
}

export default App;
