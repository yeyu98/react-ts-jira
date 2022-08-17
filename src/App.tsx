import React, { useEffect } from "react";
import ProjectListScreen from "screens/ProjectList/Index";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: "post",
      body: JSON.stringify({ name: "1232323" }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
      });
  });
  return (
    <div className="App">
      <ProjectListScreen />
    </div>
  );
}

export default App;
