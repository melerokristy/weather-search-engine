import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
    </div>
    <Footer />
  </StrictMode>
);
