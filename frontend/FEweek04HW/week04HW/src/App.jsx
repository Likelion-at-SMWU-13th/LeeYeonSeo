import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <Main />
      </div>
    </>
  );
}

export default App;
