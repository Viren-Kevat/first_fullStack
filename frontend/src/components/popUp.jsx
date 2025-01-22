import React from "react";
import "./popUp.css"; // Importing the CSS file

const Pop = ({ msg, onClose }) => {
  return (
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <h1>{msg}</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Pop;
