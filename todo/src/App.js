import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const handleTask = (e) => {
    e.preventDefault();
    setTask("");
  };
  return (
    <div className="App bg-orange-500 h-screen flex items-center justify-center ">
      <div className="h-3/4  w-2/4 bg-orange-400 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mt-5 text-white">To DO List</h2>
        {/* header */}
        <div className="flex mt-20 mx-20 content-between border-none space-x-12">
          <input
            className="w-3/4 h-9 rounded-xl p-5 "
            placeholder="Enter task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="text-white text-md font-bold h-[40px] w-[60px] bg-orange-600 rounded-xl"
            onClick={handleTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
