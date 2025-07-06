import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FirstPage from "./pages/FirstPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/:menu" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
