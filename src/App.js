import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Task } from "./Components/Task/Task";
import assetsJson from "./assets.json";
import { useState } from "react";

function App() {
  const [assets, setAssets] = useState(assetsJson.tasks[0].assets);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main>
        <div className="m-heading">
          <p>You are taking challenges of new project</p>
        </div>
        <div className="m-container">
          <div className="ms-heading">
            <p>Demo task</p>
          </div>
          <div className="tasks-container">
            {assets.map((task) => {
              return (
                <Task
                  key={task.asset_id}
                  taskId={task.asset_id}
                  assetTitle={task.asset_title}
                  assetDesc={task.asset_description}
                  assetDesc2={task.display_asset_reflection}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
