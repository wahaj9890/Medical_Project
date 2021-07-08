import React from "react";
import Landingpage from "./Landingpage";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Landingpage />
    </BrowserRouter>
  );
}

export default App;
