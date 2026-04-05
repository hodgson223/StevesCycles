import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🚴 Welcome to Steves Cycles</h1>
      <p>This is your homepage working correctly!</p>

      <button
        onClick={() => alert("Button is working!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}