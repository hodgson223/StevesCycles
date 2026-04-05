import React from "react";
import background from "../Components/background.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>🚴 Welcome to Steves Cycles</h1>
      <p>This homepage is working correctly!</p>

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

export default Home;