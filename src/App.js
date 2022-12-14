import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsageControlledOnboardingFlow } from "./design-patterns/controlled-components/controlled-onboarding-flow";
import ModalPage from "./design-patterns/layout-components/modal";
import SplitScreenPage from "./design-patterns/layout-components/split-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>aqui</h1>} />
        <Route path="/layout/split-screen" element={<SplitScreenPage />} />
        <Route path="/layout/modal" element={<ModalPage />} />
        <Route path="controlled/onboarding-flow" element={<UsageControlledOnboardingFlow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
