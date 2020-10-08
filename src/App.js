import React from 'react';
import logo from './logo.svg';
import './App.scss';

const larses = [
  {
    name: "Lars Karbø",
    description: "Working with 🧠 neural interfaces at Drowzee and posting from his indie hacking journey on TikTok.",
    image: "https://s.gravatar.com/avatar/4579b299730ddc53e3d523ec1cd5482a?s=160"
  },
  {
    name: "Lars Otto Johnsen",
    linkedin: "https://www.linkedin.com/in/lars-otto-johnsen-42b685172/",
    description: "Founder of LODDO - a digital marketing agency. Hustler to the bone, and good at selling things online.",
    image: "/johnsen.jpeg"
  },
  {
    name: "Lars Willner",
    linkedin: "https://www.linkedin.com/in/larswillner/?originalSubdomain=no",
    description: "CEO of Differ - a chatbot to help people feel less lonely. He is swedish but emigrated to the better neighbour.",
    image: "/willner.jpeg"
  },
  {
    name: "Lars Traaholt Vågnes",
    description: "This Lars is a beast at machine learning and AI. Working as a consultant and has some crazy side projects coming soon.",
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
      <div style={{
        fontSize: 12
      }}>
      helping you find the best Larses on the planet
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
