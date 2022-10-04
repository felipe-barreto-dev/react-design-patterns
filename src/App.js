import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modal } from "./design-patterns/layout-components/modal/modal";
import SplitScreenPage from "./design-patterns/layout-components/split-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>aqui</h1>} />
        <Route path="/layout/split-screen" element={<SplitScreenPage />} />
        <Route path="/layout/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
