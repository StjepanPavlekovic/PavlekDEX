import React from "react";
import "./App.css";
import Container from "./components/container/container.component";

function App() {
  return (
    <div className="main">
      <div className="closer-right"></div>
      <div className="closer-left">
        <div className="spinner"></div>
      </div>
      <div className="app-container">
        <div className="left-pillar"></div>
        <Container />
        <div className="right-pillar"></div>
      </div>
    </div>
  );
}

export default App;
