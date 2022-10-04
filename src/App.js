import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modal } from "./design-patterns/layout-components/modal/modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>aqui</h1>} />
        <Route path="/layout/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
