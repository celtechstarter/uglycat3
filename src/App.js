import React from "react";
import "./App.css";
import Listing from "./components/Listing";

function App() {
  const meineProdukte = [
    {
      name: "20% auf Tiernahrung:",
      initialTime: Math.floor(Math.random() * 100) + 10,
    },
    {
      name: "30% auf Katzenstreu:",
      initialTime: Math.floor(Math.random() * 100) + 10,
    },
    {
      name: "50% auf Katzenpielzeug:",
      initialTime: Math.floor(Math.random() * 100) + 10,
    },
  ];

  return (
    <div className="container">
      {meineProdukte.map((produkt, index) => (
        <Listing
          key={index}
          name={produkt.name}
          initialTime={produkt.initialTime}
        />
      ))}
    </div>
  );
}

export default App;
