import { createRoot } from "react-dom/client";
import React from "react";
import AppRoutes from "./Routes/Routes";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes /> {/* Use o componente Routes em vez do App */}
  </React.StrictMode>
);
