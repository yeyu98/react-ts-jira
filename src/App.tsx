import React, { useEffect } from "react";
import ProjectListScreen from "screens/ProjectList/Index";
import errorCaptured from "utils/errorCaptured";
import "./App.css";

function App() {
  const asyncFunc = () => {
    return new Promise((resolve, reject) => {
      reject("218192781739812739");
    });
  };

  const demo = async () => {
    const [res, err] = await errorCaptured(asyncFunc);
    console.log(res, err);
  };

  useEffect(() => {
    demo();
  });

  return (
    <div className="App">
      <ProjectListScreen />
    </div>
  );
}

export default App;
