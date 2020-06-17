import React from "react";
import "./App.css";
import Container from "./components/container/container.component";

function App() {
  return (
    <div className="main" id="main">
      <div className="closer-right"></div>
      <div className="closer-left">
        <div className="spinner"></div>
      </div>
      <div className="app-container">
        <div className="left-pillar"></div>
        <Container />
        <div className="right-pillar"></div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <p>Site by Stjepan Pavleković</p>
            <p>Zagreb, Croatia</p>
            <p>2020</p>
          </div>
          <div>
            <p>
              App consumes the <a href="https://pokeapi.co/">PokeAPI</a>
            </p>
            <p>
              This app is not affiliated with Nintendo or The Pokémon Company.
            </p>
            <p>Author does not own any rights to the displayed content.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
