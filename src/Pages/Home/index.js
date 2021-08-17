import React from "react";
import Main from "./Main";
import "./Main.css";
export default function Home() {
  return (
    <>
      <div
        className="main-bg"
        style={{
          maxWidth: "100vw",
        }}
      >
        <div style={{ minHeight: "90vh" }}>
          <Main />
        </div>
      </div>
    </>
  );
}
