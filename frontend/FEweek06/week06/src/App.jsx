import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import QuizApp from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuizApp />} />
          <Route path="quiz/:quizId" element={<QuizApp />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
