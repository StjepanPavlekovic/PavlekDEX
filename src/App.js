import React from "react";
import "./App.css";
import Container from "./components/container/container.component";

function App() {
  return (
    <div>
      <div className="closer-right"></div>
      <div className="closer-left">
        <div className="spinner"></div>
      </div>
      <Container />
    </div>
  );
}

export default App;
