import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
