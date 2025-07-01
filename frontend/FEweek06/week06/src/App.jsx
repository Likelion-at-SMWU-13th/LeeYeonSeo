import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import QuizApp from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<QuizApp />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
