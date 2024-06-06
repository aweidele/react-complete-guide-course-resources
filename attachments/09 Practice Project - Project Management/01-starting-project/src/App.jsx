import Sidebar from "./components/Sidebar";
function App() {
  return (
    <main>
      <div class="flex gap-6">
        <div class="w-4/12">
          <Sidebar />
        </div>
        <div class="w-5/12">Hello.</div>
      </div>
    </main>
  );
}

export default App;
