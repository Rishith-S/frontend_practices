import "./App.css";
import MainComponent from "./components/MainComponent";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <div className="md:ml-60">
          <div className="divide-y divide-gray-200">
            <TopBar />
            <MainComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
