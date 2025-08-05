import React from "react";

function Card({ title, children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem 0",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Card;
