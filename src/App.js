import React from 'react';
import logo from './logo.svg';
import './App.scss';

const larses = [
  {
    name: "Lars Karbø",
    description: "Creator of lars.best. Working with 🧠 neural interfaces and posting from his indie hacking journey on TikTok.",
    image: "https://s.gravatar.com/avatar/4579b299730ddc53e3d523ec1cd5482a?s=160"
  },
  {
    name: "Lars Otto Johnsen",
    linkedin: "https://www.linkedin.com/in/lars-otto-johnsen-42b685172/",
    description: "...",
    image: "/johnsen.jpeg"
  },
  {
    name: "Lars Willner",
    linkedin: "https://www.linkedin.com/in/larswillner/?originalSubdomain=no",
    description: "...",
    image: "/willner.jpeg"
  },
  {
    name: "Lars Traaholt Vågnes",
    description: "...",
    image: "/vaagnes.jpg"
  }
]

function App() {
  return (
    <div className="Outer">
      <div className="App">
        <div style={{
          textAlign: "center",
          width: "100%"
        }}>
          Lars.best
      </div>
      <div className="larses">
        {larses.map(lars => (
          <div className="Lars">
            <img className="Image" src={lars.image} />
            <div style={{
              fontWeight: 700,
              paddingBottom: 10,
              paddingTop: 5
            }}>{lars.name}</div>
            <div>{lars.description}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
