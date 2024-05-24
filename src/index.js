import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing";
import cats from "./cats";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="catcontainer">
    {cats.map((cat, index) => (
      <Listing
        key={index}
        Name={cat.Name}
        Alter={cat.Alter}
        Menge={cat.Menge}
        imageURL={cat.img}
      />
    ))}
  </div>
);
